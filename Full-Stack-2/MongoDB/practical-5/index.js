// Step 1 require mongoose 
const mongoose = require("mongoose");

// Step2 : connection to database
mongoose.connect("mongodb://127.0.0.1:27017/blogger", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log("connected to db")).catch(() => console.log("connection failed"));

// Step 3: Create Schema
const bloggerSchema = new mongoose.Schema({
    authorName: {
        type: String,
        require: [true, "Name require"],
    }
    email: String,
    date: {
        type: Date,
        default: Date.now,
    },
    post: {
        title: String,
        content: String,
    },
    comments: [String],
});

// Step 4: Model creation 
const model = new mongoose.model("post", bloggerSchema);

// Step 5: Inserting data

const post1 = new model({
    authorName: "Jayant",
    email: "jayant.gla_cs18@gla.ac.in",
    post: {
        title: "Breadcrumbs",
        content: "Breadcrumbs help with navigation and SEO, but most of the time their ugly and unnecessary for people who frequent your site. You want the breadcrumbs to sink into the background of the design so your readers naturally glance over them but they’re easy to find if someone is looking for them."
    },
    comment: ["Nice", "Awsome", "want more about breadcrubs"],
});

const post2 = new model({
    authorName: "Kartik",
    email: "kartik.varshney_cs18@gla.ac.in",
    post: {
        title: "Meta Data",
        content: "Like the breadcrumbs, you want the meta data (i.e. published on date, post author, category, etc.) to be worked into the design so it doesn’t stick out."
    },
    comment: ["Good", "quite good"]
});

const post3 = new model({
    authorName: "Manish Sharma",
    email: "manish.sharma_me18@gla.ac.in",
    post: {
        title: "Drop Caps",
        content: "The point of the drop cap is to immediately draw your readers’ attention to the start of the post. Magazines and newspapers use this all the time and I think more blogs should do it as well."
    },
    comment: ["Aag laga di ", "Nice blogpost"]
});

// Create Operation 
model.insertMany([post1, post2, post3]).then((doc) => console.log(doc)).catch((error) => console.log(error));

// Read Operation 
model.find().then((doc) => console.log(doc)).catch((error) => console.log(error));

// Update Operation 
const doc = model.findByIdAndUpdate("6024117c03b8424714982f47", {
    post: {
        title: "Intro Text",
        content: "The intro text should be slightly larger and easier to read than the rest of the content so it eases your readers into the post. Magazines use this technique in conjunction with the drop cap to lure in the reader in such a way that it’s hard to stop reading. It’s also called the lead."
    }
}).then((doc) => console.log(doc)).catch((eror) => console.log(error));

// Delete Operation 
model.findByIdAndDelete("6024117c03b8424714982f46", {
    name: "Kartik",
}).then((doc) => console.log(doc)).catch((error) => console.log(error));