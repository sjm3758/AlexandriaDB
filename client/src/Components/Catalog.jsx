import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import BookService from "../Services/BookService";
import BookDisplay from "./BookDisplay";
import { Grid, Typography} from '@mui/material'
function Catalog(props) {
    // Hook that will be the array that holds all the books
  const [allBooks, setAllBooks] = useState([]);

  // GET function that makes API call
  const getAllBooks = () => {
    BookService.getAllBooks().then((res) => {
      console.log(res.data);
      setAllBooks(res.data);
    });
  };

  // Renders all books on page load by calling GET function
  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div>
      <NavBar />
      <Grid container direction="column" mt={9} alignItems="center">

      <Typography variant="h5">
          CATALOG
          </Typography> 
      {allBooks.map((item, i) => {
        return (
          <BookDisplay
            key={i}
            isbn={item.isbn}
            title={item.title}
            author={item.author}
            publication={item.publicationInfo}
            pages={item.pages}
            status={item.itemStatus}
            image={item.image}
            description={item.description}
          />
        );
      })}
      </Grid>
    </div>
  );
}

export default Catalog;
