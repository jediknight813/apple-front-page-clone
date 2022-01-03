import React from "react";
import '../styles/HeaderStyles.css'


function Header() {

    return (
        <div className="header_container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 
            
            <button className="apple_icon"> 
                <i class="fa fa-apple"></i>
            </button>
            
            <button className="header_button"> Store </button>
            <button className="header_button"> Mac </button>
            <button className="header_button"> iPod </button>
            <button className="header_button"> iPhone </button>
            <button className="header_button"> Ipad </button>
            <button className="header_button"> iTunes </button>
            <button className="header_button"> Support </button>

            <div className="header_search_container">
                <img alt="search" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpldj0iaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzIj4KPGc%2BCgk8cG9seWdvbiBmaWxsPSIjNjY2IiBwb2ludHM9IjkuMjA3LDYuMTI2IDcuNzkzLDcuNTQxIDExLjc5MywxMS41NDEgMTMuMjA3LDEwLjEyNiIgLz4KCTxwYXRoIGZpbGw9IiM2NjYiIGQ9Ik01LjkxNywyYzEuNjA4LDAsMi45MTcsMS4zMDgsMi45MTcsMi45MTdTNy41MjUsNy44MzMsNS45MTcsNy44MzNTMyw2LjUyNSwzLDQuOTE3UzQuMzA4LDIsNS45MTcsMgoJCSBNNS45MTcsMEMzLjIwMSwwLDEsMi4yMDEsMSw0LjkxN3MyLjIwMSw0LjkxNyw0LjkxNyw0LjkxN3M0LjkxNy0yLjIwMSw0LjkxNy00LjkxN0MxMC44MzMsMi4yMDEsOC42MzIsMCw1LjkxNywwTDUuOTE3LDB6IiAvPgo8L2c%2BCjwvc3ZnPgo%3D" />
                <input type="text" />
            </div>

        </div>
    )
}

export default Header