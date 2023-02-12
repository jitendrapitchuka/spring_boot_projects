class ReviewModel {
  

    constructor(id, userEmail, date, 
        rating, book_id, reviewDescription) {
            
            this.id = id;
            this.userEmail = userEmail;
            this.date = date;
            this.rating = rating;
            this.book_id = book_id;
            this.reviewDescription = reviewDescription;
    }
}

export default ReviewModel;