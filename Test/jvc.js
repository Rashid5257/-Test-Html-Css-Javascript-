          "use strict"

function headerDateSet()
{
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();

    switch (m) {
        case 1:
            m = "JANUARY";
            break;
        case 2:
            m = "FEBRUARY";
            break;
        case 3:
            m = "MARCH";
            break;
        case 4:
            m = "APRIL";
            break;
        case 5:
            m = "MAY";
            break;
        case 6:
            m = "JUNE";
            break;
        case 7:
            m = "JULY";
            break;
        case 8:
            m = "AUGUST";
            break;
        case 9:
            m = "SEPTEMBER";
            break;
        case 10:
            m = "OCTOBER";
            break;
        case 11:
            m = "NOVEMBER";
            break;
        case 12:
            m = "DECEMBER";
            break;
        default: "SEPTEMBER";
    }
}

function getBlueOnTap()
{
    var tiles = document.getElementsByClassName("tile");

    for (var i = 0; i < tiles.length; i++) 
    {
        tiles[i].addEventListener("click", function changeColor(ev) {
            for (var x = 0; x < tiles.length; x++) {
                tiles[x].style.backgroundColor = "#e5e7ea";
                tiles[x].style.color = "#9b9b9b";
                tiles[x].style["boxShadow"] = null;
                tiles[x].style["margin-left"] = "2%";
                tiles[x].style["margin-right"] = "2%";
                tiles[x].style["margin-top"] = "1%";
                tiles[x].style["margin-bottom"] = "1%";
                if (ev.currentTarget == tiles[x]) {
                    tiles[x].style.backgroundColor = "#4a90e2";
                    tiles[x].style.color = "white";
                    tiles[x].style["boxShadow"] = "0 2.5px 7.5px 0 #4a90e2";
                    tiles[x].style["margin-left"] = "0.3%";
                    tiles[x].style["margin-right"] = "0.3%";
                    tiles[x].style["margin-top"] = "0.3%";
                    tiles[x].style["margin-bottom"] = "0.3%";  
                    document.getElementById("tile-container").style.padding="0.7%";
                };
            }
        }
        );
    }
}
headerDateSet();


document.getElementById("add").addEventListener("click",addRow);

function addRow()
{
    var input=prompt("Enter Some Value","");
    if(input==""|| input===null)
    alert("Invalid Value Or Cancelled..!!!");
    else
    {
        var input2=prompt("Enter Some More Value","");
        if(input2=="" || input2===null)
        alert("Invalid Value Or Cancelled..!!!");
        else
        {
            var tileDive=document.createElement("div");
            tileDive.className="tile";
            document.getElementById("tile-container").appendChild(tileDive);

            var leftDive=document.createElement("div");
            leftDive.appendChild(document.createTextNode(input));
            leftDive.className="dleft";
            tileDive.appendChild(leftDive);

            var rightDive=document.createElement("div");
            rightDive.appendChild(document.createTextNode(input2));
            rightDive.className="dright";
            tileDive.appendChild(rightDive);
            getBlueOnTap();
        }
    }
}

getBlueOnTap();