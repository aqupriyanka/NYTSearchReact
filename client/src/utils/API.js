import axios from "axios";

const PORT = process.env.PORT || 3001;

const API = {
  // Retrieves all quotes from the db
  // getQuotes: function() {
  //   return axios.get("/api/quotes");
  // },
  // // Saves a new quote to the db
  // saveQuote: function(text) {
  //   return axios.post("/api/quotes", { text });
  // },
  // // Deletes a quote from the db
  // deleteQuote: function(id) {
  //   return axios.delete(`/api/quotes/${id}`);
  // },
  // // Toggles a quote's favorite property in the db
  // favoriteQuote: function(quote) {
  //   quote.favorited = !quote.favorited;
  //   const { _id, favorited } = quote;
  //   return axios.patch(`/api/quotes/${_id}`, { favorited });
  // }


  searchArticles: (searchTerm,startDate,endDate) => {
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
    + `&q=${searchTerm}`;

    console.log(queryURL);

    if (parseInt(startDate)) {
      queryURL = queryURL + "&begin_date=" + startDate + "";
    }

    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (parseInt(endDate)) {
      queryURL = queryURL + "&end_date=" + endDate + "";
    }
    return axios.get(queryURL);
  },

  saveArticle: (article) => {
    console.log("before calling axios");
    // return axios.post(`http://localhost:${PORT}/api/saved`,{article});
    return axios.post("/api/saved",{article});

  },

  getArticles : () => {
    console.log("inside getArticles");
    return axios.get("/api/saved");
    // return axios.get(`http://localhost:${PORT}/api/saved`);

  },

  deleteArticle : (article) => {
    // console.log("inside deleteArticle == ",article);
    return axios.delete("/api/saved/${article._id}",{article});
    // return axios.delete(`http://localhost:${PORT}/api/saved/${article._id}`,{article});
    
  }

};


export default API;
