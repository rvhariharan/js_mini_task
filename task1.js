
    let inventory = [
      { id: 101, name: "Laptop", price: 1200, stock: 5 },
      { id: 102, name: "Mouse", price: 25, stock: 50 },
      { id: 103, name: "Monitor", price: 300, stock: 12 }
    ];

    function display(message) {
      document.getElementById("output").textContent = message;
    }

    function addItem() {
      let id = parseInt(document.getElementById("id").value);
      let name = document.getElementById("name").value;
      let price = parseFloat(document.getElementById("price").value);
      let stock = parseInt(document.getElementById("stock").value);

      if (!id || !name || !price || !stock) {
        display("Please enter all item details!");
        return;
      }

      inventory.push({ id, name, price, stock });
      display(`${name} added successfully!`);
    }

    function removeItem() {
      let id = parseInt(document.getElementById("id").value);
      inventory = inventory.filter(item => item.id !== id);
      display(`Item with ID ${id} removed.`);
    }

    function updateStock() {
      let id = parseInt(document.getElementById("id").value);
      let stock = parseInt(document.getElementById("stock").value);
      let item = inventory.find(item => item.id === id);

      if (item) {
        item.stock = stock;
        display(`Stock updated for ${item.name}. New stock: ${item.stock}`);
      } else {
        display("Item not found!");
      }
    }

    function findPrice() {
      let id = parseInt(document.getElementById("id").value);
      let item = inventory.find(item => item.id === id);
      if (item) {
        display(`Price of ${item.name}: $${item.price}`);
      } else {
        display("Item not found!");
      }
    }

    function listAllItems() {
      let list = "Inventory List:\n\n";
      inventory.forEach(item => {
        list += `ID: ${item.id}, Name: ${item.name}, Price: $${item.price}, Stock: ${item.stock}\n`;
      });
      display(list);
    }
