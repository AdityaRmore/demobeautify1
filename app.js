const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Schema File
const userData = require("./user");
const userHistory = require("./history");
const monthlySale = require("./monthlySale");
const schedule = require("./schedule");
const admin = require("./admin");
const product = require("./product");
const services = require("./services");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productData = [];

// mongodb+srv://admin:<password>@cluster0.qiojw8t.mongodb.net/?retryWrites=true&w=majority


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:admin@cluster0.dfbie4m.mongodb.net/beautifyApp",
    { 'useUnifiedTopology': true, 'useNewUrlParser': true }, (error) => {

        if (!error) {
            console.log("Status", "Connected to mongoose");

            // Add User 
            app.post("/api/add_user", async (req, res) => {
                let data = userData(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    })
                }
            });

            app.post("/api/user_history", async function (req, res) {
                let data = userHistory(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    });
                }
            });

            app.post("/api/monthlySale", async function (req, res) {
                let data = monthlySale(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    });
                }
            });

            app.post("/api/schedule", async function (req, res) {
                let data = schedule(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    });
                }
            });

            app.post("/api/add_admin", async function (req, res) {
                let data = admin(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    });
                }
            });

            app.post("/api/product", async function (req, res) {
                let data = product(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    });
                }
            });


                      app.post("/api/services", async function (req, res) {
                            let data = services(req.body);
                            try {
                                let dataToStore = await data.save();
                                res.status(200).json(dataToStore);
                                console.log("Data Added Successfully");
                            } catch (e) {
                                res.status(400).json({
                                    'status': error
                                });
                            }
                        });


            app.post("/api/add_schedule", async function (req, res) {
                let data = schedule(req.body);
                try {
                    let dataToStore = await data.save();
                    res.status(200).json(dataToStore);
                    console.log("Data Added Successfully");
                } catch (e) {
                    res.status(400).json({
                        'status': error
                    });
                }
            });


            // Read Data
            // get_userData
            app.get("/api/get_userData/:adminid", async (req, res) => {
                // const filter = { u_name:  'Aditya More' };
                try {
                const { adminid } = req.params;
                    let data = await userData.find({adminid:adminid}).sort({ user_date: -1 });;
                    res.status(200).json(data);
                } catch (e) {
                    res.status(500).json(error);
                }
            });

            //get_adminData
            app.get("/api/get_adminData/:admin_id", async (req, res) => {
                try {
                    const { admin_id } = req.params;
                    let data = await admin.find({ admin_id: admin_id });
                    res.status(200).json(data);
                } catch (e) {
                    res.status(500).json(error);
                }
            });

            //get_userHistory
            app.get("/api/get_userHistory/:adminid", async (req, res) => {
                try {
                const { adminid } = req.params;
                    let data = await userHistory.find({adminid:adminid});
                    res.status(200).json(data);
                } catch (e) {
                    res.status(500).json(error);
                }
            });

              //Schedule
                        app.get("/api/schedule/:adminid", async (req, res) => {
                            try {
                            const { adminid } = req.params;
                                let data = await schedule.find({adminid:adminid});
                                res.status(200).json(data);
                            } catch (e) {
                                res.status(500).json(error);
                            }
                        });

            //product
            app.get("/api/product/", async (req, res) => {
                try {
                    let data = await product.find();
                    res.status(200).json(data);
                } catch (e) {
                    res.status(500).json(error);
                }
            });

            //monthlySale
                        app.get("/api/monthlySale/", async (req, res) => {
                            try {
                                let data = await monthlySale.find().sort({ month: 1 });
                                res.status(200).json(data);
                            } catch (e) {
                                res.status(500).json(error);
                            }
                        });

              //get services
                        app.get("/api/services/", async (req, res) => {
                            try {
                                let data = await services.find();
                                res.status(200).json(data);
                            } catch (e) {
                                res.status(500).json(error);
                            }
                        });

            //productbyCompanyId
            app.get("/api/productbyCompanyId/:p_companyId", async (req, res) => {
                try {
                    const { p_companyId } = req.params;
                    let data = await product.find({ p_companyId: p_companyId });
                    res.status(200).json(data);
                } catch (e) {
                    res.status(500).json(error);
                }
            });


            // Update Api
            // use patch    => to only send one field to update you can update a specific field
            // use put      => you have to pass the whole data
            app.put("/api/update_userData/:id", async (req, res) => {
                let id = req.params.id;
                let updatedData = req.body;
                let options = { new: true };
                try {
                    const data = await userData.findByIdAndUpdate(id, updatedData, options);
                    res.status(200).send(data);
                } catch (e) {
                    console.log(e.message);
                    res.status(200).send(e.message);
                }
                console.log("Final =", req.body);
                console.log("Updated Data");

            });

            app.put("/api/update_AdminData/:id", async (req, res) => {

                let id = req.params.id;
                let updatedData = req.body;
                let options = { new: true };
                try {
                    const data = await admin.findByIdAndUpdate(id, updatedData, options);
                    res.status(200).send(data);
                } catch (e) {
                    console.log(e.message);
                    res.status(200).send(e.message);
                }
                console.log("Final =", req.body);
                console.log("Updated Data");

            });

            // delete Api
            app.delete("/api/delete/:id", async (req, res) => {

                let id = req.params.id;
                try {
                    const data = await product.findByIdAndDelete(id);
                    // res.send(data);
                    // res.json({
                    // 'status':"Product Deleted",
                    // 'Product':"${data.pname}"    
                    // })
                    res.status(204).send({
                        'status': "Product Deleted",
                        'Product': "${data.pname}"
                    })
                } catch (e) {
                    res.send(e.message);
                }
                console.log("Final =", req.body);

            });

        } else {
            console.log(error.message);
        }

    })





app.listen(8080, () => {
    console.log("Connected to serever at 8080")
});
