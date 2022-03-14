function getBotResponse(input) {
   

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }
    if (input == "what is the price of this product") {
        return "price of this product is 50$";
    }
    if (input == "will you deliver me in one day") {
        return "Yes";
    }
    if (input == "oky thanks") {
        return "no problem";
    }
    if (input == "is this product available") {
        return "No out of stock";
    }
    if (input == "your product are too good") {
        return "thanks";
    }
    if (input == "XL size is available") {
        return "yes";
    }
    
    if (input == "which payment method you accept") {
        return "Visa, jazzcash, master card, easypasa";
    }
     else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}