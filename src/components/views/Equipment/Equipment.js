// import React from "react";
// import "./Equipment.css";

// export class Equipment extends React.Component {
//   state = {
//     products: [],
//   };

//   async componentDidMount() {
//     const res = await fetch("http://localhost:5000/api/products/products");
//     try {
//       this.setState({
//         products: await res.json(),
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   renderProducts = () =>
//     this.state.posts.map(({ equipment, location }, index) => (
//       <section key={index}>
//         <h2>{equipment}</h2>
//         <p>{location}</p>
//       </section>
//     ));

//   render() {
//     return (
//       <main className="pic">
//         <h1></h1>
//         {this.renderProducts()}
//       </main>
//     );
//   }
// }
