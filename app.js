
var mainwin=document.getElementById('win');

//Main Headding//

var heading=document.createElement('h1');
var h1Text=document.createTextNode('TODO APP');
heading.appendChild(h1Text);
heading.setAttribute('id','h1');

//----------------//
//INPUT BOX


var userinput=document.createElement('div');
userinput.setAttribute('class','userinput');
var inputbox=document.createElement('input');
inputbox.setAttribute('type','text')
inputbox.setAttribute('id','uiid')

//------------------//
//AddButton//

var addbut=document.createElement('button');
var addText=document.createTextNode('Add Work');
addbut.appendChild(addText);
addbut.setAttribute('id','addbut')
addbut.setAttribute('onClick','add()')
console.log(addbut)

//---list//
var todoLIst=document.createElement('ul');
todoLIst.setAttribute('id','listyle')



    


mainwin.appendChild(heading);
mainwin.appendChild(inputbox);
mainwin.appendChild(addbut);

function add(){
var uservalue=document.getElementById('uiid').value;
var li = document.createElement('li')
var liText = document.createTextNode(uservalue)
li.appendChild(liText)
todoLIst.appendChild(li)
mainwin.appendChild(todoLIst);



var divdel=document.createElement('div');

var delbutt=document.createElement('button');
var delText=document.createTextNode('Delete');
delbutt.appendChild(delText);
delbutt.setAttribute("class", 'delLi');
delbutt.setAttribute("id", 'delLi');

divdel.appendChild(delbutt);

li.appendChild(delbutt);

//---------edit Button ----

var editbut=document.createElement("button");
var edittxt=document.createTextNode('Edit');
editbut.setAttribute('id','edbut');
editbut.setAttribute('onClick','edit');

editbut.appendChild(edittxt);
li.appendChild(editbut);
todoLIst.appendChild(li);


//---------edit Button Function----
editbut.addEventListener('click',function(){
    
    var l=this.parentNode;
    var text=prompt('Enter value'+l.id)
    li.innerHTML=text;
    li.appendChild(delbutt)
    li.appendChild(editbut)
    
})



//---------Del Button Function----
delbutt.addEventListener('click',function(){
   delbutt.parentNode.remove();

})
document.getElementById('uiid').value = '';


}









// var maindiv=document.createElement('div');
// console.log(maindiv);
// maindiv.setAttribute('class','mydiv');

// var list=document.createElement('ul');
// var li=document.createElement('li');
// list.appendChild(li);


// var h1=document.createElement('h1');
// var h1Text=document.createTextNode('TODO APP')
// h1.appendChild(h1Text);

// var user_input=document.createElement('input');
// user_input.setAttribute('type','text');
// user_input.setAttribute('id','user');




// var button=document.createElement('button');
// var btnText=document.createTextNode('Add');

// // var del=document.createElement('button');
// // var deltext=document.createTextNode('Delete')
// // del.appendChild(deltext);



// button.appendChild(btnText);
// maindiv.appendChild(user_input);

// var win=document.getElementById('win');
// win.appendChild(h1);

// win.appendChild(maindiv);
// win.appendChild(button);
// var user=document.getElementById('user').value;

// console.log(user);
// //make todoapp with del, edit using DOM





















































// // var maindiv=document.getElementById('main-div');

// // var button=document.createElement('button');
// // var btnText=document.createTextNode('Click me')
// // button.appendChild(btnText);
// // console.log(button);
// // maindiv.appendChild(button);
// // button.setAttribute('onClick','show()')

// // var a=document.createElement('a');
// // a.setAttribute('href','#')
// // var atext=document.createTextNode('Less');
// // a.appendChild(atext);
// // console.log(a);



// // function show(){
// // var show=document.getElementById('show').innerHTML="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Commodi laboriosam voluptates, perspiciatis maiores saepe magnam beatae amet distinctio obcaecati modi repudiandae voluptatum rerum recusandae nemo blanditiis suscipit esse dignissimos ducimus! ";
// // document.getElementById('button').style.display='none';
// // }





























