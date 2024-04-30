
// Get request to our API
async function Home() {
  const bookData = await fetch("https://simple-books-api.glitch.me/");
  const res = await bookData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  )
}

export default Home;



// Get data of our books
async function Home() {
  const bookData = await fetch("https://simple-books-api.glitch.me/books");
  const res = await bookData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  )
}

export default Home;


// Get data of sinlge book
async function Home() {
  const bookData = await fetch("https://simple-books-api.glitch.me/books/1");
  const res = await bookData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  )
}

export default Home;



// Post Method 
// Post Method for Authentication:
async function Home() {
  const ordersData = await fetch('https://simple-books-api.glitch.me/api-clients/', {
    method: 'POST',
    headers: {
      'content-Type' : 'application/json'
    },
    body: JSON.stringify(
      {
        clientName: "AbdulRehman",
        clientEmail: "AbdulRehman@example.com"
     }
    ),
  });
  const res = await ordersData.json();
  console.log(res);

  // Output 
  // {
  //   accessToken: '880b47ec192535d3904b30dd1ec95171efbe014718566801530498ff6350d3b2'
  // }

  return (
    <>
      <h1>APIS</h1>
    </>
  );
}

export default Home;




// first we can chect our orders with the help of Get Request 
async function Home() {
  const ordersData = await fetch('https://simple-books-api.glitch.me/orders', {
    headers: {
      Authorization : 'Bearer 880b47ec192535d3904b30dd1ec95171efbe014718566801530498ff6350d3b2'
    }
  })
  const res = await ordersData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  );
}

export default Home;



// Then order a book with the help of POST method: 

async function Home() {
  const ordersData = await fetch('https://simple-books-api.glitch.me/orders', {
    method:'POST',
    headers: {
      Authorization: `Bearer 880b47ec192535d3904b30dd1ec95171efbe014718566801530498ff6350d3b2`,
    },
    body: JSON.stringify(
      {
        "bookId": 1,
        "customerName": "AbdulRehman"
      }
    )
  })
  const res = await ordersData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  );
}

export default Home;



// Get data of our Orders 
async function Home() {
  const ordersData = await fetch('https://simple-books-api.glitch.me/orders', {
    headers: {
      Authorization: `Bearer 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9`,
    },
  });
  const res = await ordersData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  );
}

export default Home;



// Update our order with the help of Patch 
async function Home() {
  const ordersData = await fetch('https://simple-books-api.glitch.me/orders/2h3iwlz3YhEYQbRLOhRS6', {
    method: 'Patch',
    headers: {
      Authorization: `Bearer 65e17e4e6c0ad72ce8eece6ec8aefb66ab1c98650f1f0c4d98866d07848c0fd9`,
    },
    body: JSON.stringify(
      {
        customerName: "Rehman"
      }
    )
  });
  const res = await ordersData.json();
  console.log(res);
  return (
    <>
      <h1>APIS</h1>
    </>
  );
}

export default Home;




