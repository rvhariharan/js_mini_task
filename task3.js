
    let contacts = [
      { firstName: "Ram", lastName: "Kumar", phone: "9859785895", email: "ram@example.com" },
      { firstName: "Sam", lastName: "Sundar", phone: "7859685785", email: "sam@example.com" },
      { firstName: "Ravi", lastName: "Teja", phone: "7858958896", email: "ravi@example.com" }
    ];

    function display(msg) {
      document.getElementById("output").textContent = msg;
    }

    function addContact() {
      let fName = document.getElementById("firstName").value.trim();
      let lName = document.getElementById("lastName").value.trim();
      let phone = document.getElementById("phone").value.trim();
      let email = document.getElementById("email").value.trim();

      if (!fName || !lName || !phone || !email) {
        display(" Please fill all contact fields!");
        return;
      }

      contacts.push({ firstName: fName, lastName: lName, phone, email });
      display(`Contact added: ${fName} ${lName}`);
    }

    function searchByLastName() {
      let lName = document.getElementById("lastName").value.trim();
      if (!lName) {
        display("Enter a last name to search!");
        return;
      }

      let results = contacts.filter(c => c.lastName.toLowerCase() === lName.toLowerCase());

      if (results.length === 0) {
        display(`No contacts found with last name '${lName}'.`);
        return;
      }

      let msg = `Contacts with last name '${lName}':\n\n`;
      results.forEach(c => {
        msg += `Name: ${c.firstName} ${c.lastName}\nPhone: ${c.phone}\nEmail: ${c.email}\n\n`;
      });
      display(msg);
    }

    function sortByFirstName() {
      contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
      display("Contacts sorted alphabetically by First Name.\n\n" + getContactList());
    }

    function updateEmail() {
      let phone = document.getElementById("phone").value.trim();
      let newEmail = document.getElementById("email").value.trim();

      let contact = contacts.find(c => c.phone === phone);

      if (contact) {
        contact.email = newEmail;
        display(` Email updated for ${contact.firstName} ${contact.lastName}: ${newEmail}`);
      } else {
        display(" No contact found with that phone number!");
      }
    }

    function listAllContacts() {
      display(getContactList());
    }

    function getContactList() {
      let list = "Contact List:\n\n";
      contacts.forEach(c => {
        list += `Name: ${c.firstName} ${c.lastName}\nPhone: ${c.phone}\nEmail: ${c.email}\n\n`;
      });
      return list;
    }
