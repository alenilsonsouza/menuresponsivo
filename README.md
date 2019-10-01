<h1>Menu Responsivo</h1>

<p>Arquivo script.js:</p>
<pre>
$(function(){

    $('#btMenu').click(function(){
        $('#menu').addClass('menuAberto');
    });
    $('#btFechar a').click(function(){
        $('#menu').removeClass('menuAberto');
    });
});
</pre>

<p>Arquivo estilo.css:</p>
<pre>
body{
    margin:0;
    padding:0;
}

/*Menu*/
#menu{
    width:100%;
}
#menu ul{
    list-style-type: none;
    width: 100%;
    margin:0;
    padding:0;
    display:flex;
    flex-direction: row;
}
#menu ul li{
    flex:1;
}
#menu ul li a{
    display: block;
    text-align: center;
    padding:15px;
    font-family: sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    background-color:#999;
    color:#fff;
}
#menu ul li a:hover{
    background-color:#ccc;
    color:#000;
}
#btFechar{
    display: none;
}


/*Responsivo*/
@media screen and (max-width:760px){
    #btMenu{
        display: block;
        width:40px;
        height: 40px;
        position: fixed;
        top:15px;
        right: 15px;
        border: 2px solid #000;
        border-radius:5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
    .menuAberto{
        width: 200px !important;
    }
    #btMenu div{
        width:60%;
        height: 1px;
        background-color:#000;
        margin:3px 0;
    }
    #menu{
        
        width:0;
        position: fixed;
        right: 0;
        top:0;
        bottom:0;
        background-color:#555;
        transition: width 0.5s linear 0.5s;
        -webkit-box-shadow: -10px -3px 11px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: -10px -3px 11px -8px rgba(0,0,0,0.75);
        box-shadow: -10px -3px 11px -8px rgba(0,0,0,0.75);
    }
    #menu ul{
        flex-direction: column;
    }
    #btFechar{
        display: block;
        margin:10px;
        background-color:#fff;
        border-radius: 5px;

    }
    #btFechar a{
        color:#000;
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        padding:10px;
        display: block;
        text-decoration: none;
        text-align: center;

    }
}
</pre>