'use strict'

class node{
    constructor(data , left=null , right=null)
    {
          this.value=data;
          this.left=left;
          this.right=right
    }
}

module.exports=node;