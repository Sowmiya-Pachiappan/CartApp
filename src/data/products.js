import MTRChilli from '../images/mtr_chilli3.jpg'
import HimalayaShampoo from '../images/himalaya-anti-dandraff.jpg';
import TurmericPowder from '../images/turmeric.jpg';
import ComboSpices from '../images/aashirvad-combo-pack.jpg'
import TataSalt from '../images/salt-1kg.jpeg'
import UradDal from '../images/urad-dal.jpg';
import Sugar from '../images/sugar.jpeg'

const products = JSON.stringify(
  [
    {
      "_id": "639c77f925d5e012ecb7667a",

      "name": "MTR Chilli Powder",
      "image": [
        MTRChilli
      ],
      "isActive": true,
      "brand": "MTR",
      "category": "639627d502a70a8239c42361",

      "description": "Chilli Powder",
      "rating": 0,
      "numReviews": 0,
      "label": "100 g",
      "size": 100,
      "purchasePrice": 40,
      "sellingPrice": 45,
      "countInStock": 4,
      "mrp": 50,
      "unit": "g",
      "reviews": [],
      "__v": 0
    }, {
      "_id": "639f662be274bc2944169d21",

      "name": "Himalaya Anti-Dandruff Shampoo",
      "image": [
        HimalayaShampoo
      ],
      "isActive": true,
      "brand": "Himalaya",
      "category": {
        "$oid": "6396279002a70a8239c4235c"
      },
      "description": "Himalaya's Anti-Dandruff Shampoo effectively fights dandruff and provides nourishment to the hair.",
      "rating": 0,
      "numReviews": 0,
      "label": "200 ml",
      "size": 200,
      "purchasePrice": 135,
      "sellingPrice": 145,
      "countInStock": 8,
      "mrp": 150,
      "unit": "ml",
      "reviews": [],
      "__v": 0
    }, {
      "_id": "639f675ee274bc2944169d30",

      "name": "Eastern Turmeric Powder",
      "image": [
        TurmericPowder
      ],
      "isActive": true,
      "brand": "Eastern",
      "category": {
        "$oid": "639627d502a70a8239c42361"
      },
      "description": "Fine quality of ingredients with blend",
      "rating": 0,
      "numReviews": 0,
      "label": "250 g",
      "size": 250,
      "purchasePrice": 75,
      "sellingPrice": 80,
      "countInStock": 10,
      "mrp": 85,
      "unit": "g",

      "reviews": [],
      "__v": 0
    }, {
      "_id": "639f6a14e274bc2944169d57",

      "name": "Aashirvaad Spices Combo Pack (Chilli 200g Turmeric 200g Coriander 200g)",
      "image": [
        ComboSpices
      ],
      "isActive": true,
      "brand": "Aashirvad",
      "category": {
        "$oid": "639627d502a70a8239c42361"
      },
      "description": "Chilli Powder",
      "rating": 5,
      "numReviews": 1,
      "label": "1 Pc",
      "size": 1,
      "purchasePrice": 160,
      "sellingPrice": 171,
      "countInStock": 18,
      "mrp": 190,
      "unit": "Pc",

      "reviews": [
        {
          "user": {
            "$oid": "63af3f8952fa79214bce19af"
          },
          "name": "Sowmiya",
          "comment": "good",
          "rating": 5,
          "_id": {
            "$oid": "63cc1fc97c3065a104ccd3e5"
          },
        }
      ],
      "__v": 1
    }, {
      "_id": "639f766de274bc2944169dc5",

      "name": "Tata Salt, Vacuum Evaporated Iodised",
      "image": [
        TataSalt
      ],
      "isActive": true,
      "brand": "Tata",
      "category": {
        "$oid": "639f6ed3e274bc2944169d71"
      },
      "description": "Tata Salt offers you a hygienic alternative to loose unbranded salt",
      "rating": 0,
      "numReviews": 0,
      "label": "1 kg",
      "size": 1,
      "purchasePrice": 20,
      "sellingPrice": 25,
      "countInStock": 34,
      "mrp": 28,
      "unit": "kg",

      "reviews": [],
      "__v": 0
    }, {
      "_id": "639f773be274bc2944169de0",

      "name": "Tata Sampann Unpolished Urad Whole Dal",
      "image": [
        UradDal
      ],
      "isActive": true,
      "brand": "Tata",
      "category": {
        "$oid": "639f6ed3e274bc2944169d71"
      },
      "description": "Tata I Shakti Dal - Urad Whole 500g Pouch",
      "rating": 0,
      "numReviews": 0,
      "label": "500 g",
      "size": 500,
      "purchasePrice": 60,
      "sellingPrice": 74,
      "countInStock": 8,
      "mrp": 94,
      "unit": "g",

      "reviews": [],
      "__v": 0
    }, {
      "_id": "63a4462169957f606db99ef9",

      "name": "Madhur Sugar Refined",
      "image": [
        Sugar
      ],
      "isActive": true,
      "brand": "Madhur",
      "category": {
        "$oid": "639f6ed3e274bc2944169d71"
      },
      "description": "This product is made entirely from a highly skilled and technical automated process which means that the product is hygienic to the core, and untouched by hand.",
      "rating": 4,
      "numReviews": 2,
      "label": "1 kg",
      "size": 1,
      "purchasePrice": 45,
      "sellingPrice": 52,
      "countInStock": 98,
      "mrp": 60,
      "unit": "kg",

      "reviews": [
        {
          "user": {
            "$oid": "63af3f8952fa79214bce19af"
          },
          "name": "Sowmiya",
          "comment": "Good",
          "rating": 5,
          "_id": {
            "$oid": "63b42a18be8ed2cbaeb1b5aa"
          },
        },
        {
          "user": {
            "$oid": "63b4570a47d979d4c06431db"
          },
          "name": "Sowmiya P",
          "comment": "Just Okay",
          "rating": 3,
          "_id": {
            "$oid": "63b4581147d979d4c06432cb"
          },
        }
      ],
      "__v": 6
    }]);


export default products