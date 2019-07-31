var emptyobject = {};

var product = {
    id: 223242,
    name: 'Converse All-Star',
    size: 42.5,
    brand: 'Converse',
    color: 'green',
    isAvailable: false
};
// after some action change value of object property
product.isAvailable = true;
// get property value 
product["id"] // returns 223242
// object functions
var address = {
    id: 8828772111,
    country: 'Turkey',
    city: 'İstanbul',
    town: 'Beyoğlu',
    district: 'Cihangir',
    street: 'Sıraselviler',
    streetType: 'Cadde',
    doorNumber: '80b',
    postalCode: 34433,
    fullAddressNational: function() {
        return this.district + " Mahallesi " +  this.street + " " + this.streetType + "si No: " + this.doorNumber + " " + this.postalCode + " " + this.town + "/" + this.city; 
    },
    fullAddressInternational: function() {
        return this.district + " Mahallesi " +  this.street + " " + this.streetType + "si No: " + this.doorNumber + " " + this.postalCode + " " + this.town + "/" + this.city + "/" + this.country; 
    }
}
address.fullAdressNational() // returns full national adress Cihangir Mahallesi Sıraselviler Caddesi No: 80b 34433 Beyoğlu İstanbul
address.fullAddressInternational() // returns full international adress Cihangir Mahallesi Sıraselviler Caddesi No: 80b 34433 Beyoğlu İstanbul Turkey