// Will need to search for books by ISBN or Title
// May need to make the Title another key to search by in database
// Successful search will populate up a modal or card to the screen, giving detailed info about a book

import React, { useState } from "react";
import NavBar from "./NavBar";
import { Button, Stack, TextField } from "@mui/material";
import BookService from "../Services/BookService";
import BookDisplay from "./BookDisplay";

function Search(props) {
  const [isbn, setIsbn] = useState();
  const [bookInfo, setBookInfo] = useState([]);

  const handleIsbn = (e) => {
    setIsbn(e.target.value);
  };

  const searchBookByIsbn = (isbn) => {
    BookService.getBook(isbn).then((res) => {
      console.log(res.data);
      setBookInfo([res.data]);
    });
    console.log("search firing..." + isbn);
  };

  console.log(bookInfo);
  return (
    <div>
      <NavBar />
      SEARCH PAGE
      <Stack
        spacing={2}
        mt={8}
        mb={2}
        direction="row"
        justifyContent="center"
        width="100%"
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          fullWidth={true}
          onChange={handleIsbn}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchBookByIsbn(isbn);
            }
          }}
        />
        <Button
          onClick={() => {
            searchBookByIsbn(isbn);
          }}
          variant="contained"
        >
          Go
        </Button>
      </Stack>
      {bookInfo.map((item, i) => {
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
    </div>
  );
}

export default Search;
