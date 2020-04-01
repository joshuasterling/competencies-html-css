alert('This alert is to be called on page load showing that JS is in use via a Script tag from the HTML');


//Server - Middleware (Request level)
app.post(`/api/bogus`, middleComp, bogusCont.bogus);

const middleComp = (req, res, next) => {
	if (req) {
    res.status(200).send(console.log("This is the Middlware"));
	} else {
		next();
	}
};


// SERVER - REST (queries)
//Front End
axios.get(`/api/customer?name=${this.state.name}`);

//Back End
app.get('/api/customer', bogusCont.getCustomer);

//Function
const getCustomer: async (req, res) => {
	const name = req.query;
	const db = req.app.get("db");

	let customer = await db.get_customer(name);
	if (customer[0]) {
		res.status(200).send(customer);
	} else {
		res.status(500).send({ message: "Customer not found" });
	}
}

//DB get_customer()
SELECT *
FROM customers
WHERE name = $1;