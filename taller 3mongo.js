//use('sample_airbnb');
//parte 1
// db.listingsAndReviews.aggregate([
//     {
//      $project:{
//         numservi:{$size:"$amenities"}
//     }},{
//     $sort:{
//     "numservi":-1
//     }
// },{$limit:1
// }])
//parte 2
// db.listingsAndReviews.aggregate([
//     { $match: { "amenities": { $in: [ "Wifi", "Ethernet" ] } } },
//     { $count: "lo contienen" }
//   ])
//parte 3
// db.listingsAndReviews.aggregate([
//     { $match: {
//         $and:[
//         {"number_of_reviews":{$gte: 50}},
//         {"review_scores.review_scores_rating": { $gte: 80 }},
//         {"amenities": { $in: ["Wifi","Ethernet"] }},
//         {"address.country":"Brazil"}
//         ]
//       }
//     },
//     { $project: {
//         "address.country":true
//       }
//     }
//   ])
//parte 4
//db.listingsAndReviews.aggregate([
//     {
//         $match: {
//         "property_type":"House"
//     }
// },{
//     $group: {
//         _id:"$address.country",
//         precioPais:
//         {
//             $avg:"$price"
//         }
//     }
// }])
//<iframe style="background: #F1F5F4;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);width: 100vw;height: 100vh;"  src="https://charts.mongodb.com/charts-project-0-lzjpg/embed/dashboards?id=64557dbb-9de2-4781-8855-81e03ba77ab1&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>