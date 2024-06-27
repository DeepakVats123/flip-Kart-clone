import  products  from '../Models/products.model.js';


async function getProduct(req,res) {
    try {
        console.log(req.query)
        const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 20;
		const search = req.query.q || "";
        console.log(search);
		let sort = req.query.sort || "rating";
		let category = req.query.category_name || "All";
		const categoryOptions = [ "appliances", "electronics", "fashion", "grocery", "mobiles", "home", "top_offers" ];
		category === "All"
			? (category = [...categoryOptions])
			: (category = req.query.category_name.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if(sort[1]){
			sortBy[sort[0]] = sort[1];
		}else{
			sortBy[sort[0]] = "asc";
		}
        
        // price range 
        let range = req.query.range;
        if(range){
            var rangeArray = range.split(",")
            var rangeBy = rangeArray[0];
            console.log(rangeArray);
            var gte_price = +rangeArray[1] ||"";
            var lte_price = +rangeArray[2] || "";
            console.log(gte_price, lte_price, rangeBy);
        }
        var rangetestlte = lte_price? {new_price: { $lte: lte_price}}:{};
        var rangetestgte = gte_price? {new_price: { $gte: gte_price}}:{};

        // discount_gte
        var discount_gte = req.query.discount_gte;
        var smallDiscount = 100;
        if(Array.isArray(discount_gte)){
            discount_gte.forEach(element => {
                smallDiscount = Math.min(+element, smallDiscount)
            });
        }else{
            smallDiscount = +discount_gte;
        }
        var discountrange = discount_gte ? { discount: { $gte: smallDiscount}}:{};

        
        // hiddenStarts 
        var hiddenStarts = req.query.hidden_stars_gte;
        var smallhiddenStarts = 5;
        if(Array.isArray(hiddenStarts)){
            hiddenStarts.forEach(element => {
                smallhiddenStarts = Math.min(+element, smallhiddenStarts)
            });
        }else{
            smallhiddenStarts = +hiddenStarts;
        }
        var hiddenStartsrange = hiddenStarts ? { hidden_stars: { $gte: smallhiddenStarts}}:{};


		let product = await products.find({$and: [
            {description: { $regex: search, $options: "i" }},
            {$and: [rangetestgte, rangetestlte, discountrange, hiddenStartsrange]}
            ]})
			.where("category_name")
			.in([...category])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await products.countDocuments({
			category_name: { $in: [...category] },
			description: { $regex: search, $options: "i" },
            $and: [rangetestgte, rangetestlte, discountrange, hiddenStartsrange]
		});

		const data = {
			total,
			page: page + 1,
			limit,
			product
		};

		res.send(data);
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            message: 'Internal Server Error'
        })
    }
}
async function getProductById(req,res) {
    try {
        let {id} = req.params;
        console.log(id, 'di');
        const data = await products.findById(id);
        if(!data) {
            return res.status(404).send({
                status: 'Error',
                message: "Not Found"
            })
        }
        return res.send({
            status: "Success",
            data: data
        })
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            message: 'Internal Server Error'
        })
    }
}
async function postProduct(req,res) {
    try {
        console.log(req.body);
        const data = await products.create(req.body);
        if(data){
            return res.send({
                status: "Success",
                data: data
            })
        }else{
            return res.status(400).send({
                status: 'Error',
                message: 'Somethng went wrong'
            })
        }
        // res.send("test create products")
    } catch (error) {
        return res.send(500).send({
            status: 'Error',
            message: 'Internal Server Error'
        })
    }
}


export {getProduct, postProduct, getProductById};