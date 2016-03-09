var product = function(name, id){
    this.name = name;
    this.id = id;
};

var products = [];
products.push(new product("iPhone 5", products.length));
products.push(new product("iPhone 5s", products.length));
products.push(new product("iPhone 6", products.length));
products.push(new product("iPhone 6s", products.length));
products.push(new product("Nexus 5P", products.length));
products.push(new product("Beats Studio 2.0", products.length));
products.push(new product("iPad Mini 2", products.length));

var invoice = function(id, cName, date, invoiceNo, total){
    this.id = id;
    this.cName = cName;
    this.date = date;
    this.invoiceNo = invoiceNo;
    this.total = total;
    this.status = true;
};



var outputProduct = function(name, quantity, cost, id){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
    this.select = false;
}

var outputProducts = {};
