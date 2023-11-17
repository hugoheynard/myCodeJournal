/* DISPLAY POST 
Use to :  displays the post object properties
Input : 
    object  || callback function that generates object from db
*/

const displayPost = (obj) => {
    //DEFINE PARENT CONTAINER
    const blogContainer = document.getElementById('blogContainer');

    //POST CONTAINER
    const blogPost = document.createElement('div');
    blogPost.setAttribute('id', `${'postID_' + obj.id}`);
    blogPost.setAttribute('class', 'blogPost');
    blogContainer.appendChild(blogPost);
    
    //POST HEADER
    const postHeader = document.createElement('div');
    postHeader.setAttribute('class', 'postHeader');
    blogPost.appendChild(postHeader);

    const postID = document.createElement('h2');
    postID.innerHTML = `${'#' + obj.id + '-'}`;
    postHeader.appendChild(postID);
    
    const postTitle = document.createElement('h2');
    postTitle.innerHTML = obj.title;
    postHeader.appendChild(postTitle);
    
    //POST BODY
    const postBody = document.createElement('div');
    postBody.setAttribute('class', 'postBody');
    blogPost.appendChild(postBody);

    const postContent = document.createElement('p');
    postContent.innerHTML = obj.content;
    blogPost.appendChild(postContent);

    //POST FOOTER
    const postFooter = document.createElement('div');
    postFooter.setAttribute('class', 'postFooter');
    blogPost.appendChild(postFooter);

    const postInfos = document.createElement('p');
    postInfos.innerHTML = `Published ${obj.date} by ${obj.author}`;
    blogPost.appendChild(postInfos);
}

export { displayPost };