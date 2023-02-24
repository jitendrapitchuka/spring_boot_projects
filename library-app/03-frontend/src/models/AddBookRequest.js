class AddBookRequest {
   

    constructor(title, author, description, copies, 
        category) {
            this.title = title;
            this.author = author;
            this.description = description;
            this.copies = copies;
            this.category = category;
        }
}

export default AddBookRequest;