import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Nav">
      <Link to="/list">List</Link>
    </div>
  );
}

export default Home;

/*function Wheather{
(document).ready(){
    $("#getWeatherForcast").click(function(){
    var city= $("#city").val();
    var key = '1e9227bcec3a8aebef675fabe4370c55';

    $.ajax({
        url: 'http://api.opemweathermap.org/data/2.5/weather',
        dataType: "json",
        type: "GET",
        data: {q: city, appid: key, units:'metric'},

        success: function(data){
            var wf="";
            $.each(data.weather, function(index,val){
                wf += '<p><b>' +data.name + "</b><img src="+val.icon+".png</p>"
                data.main.temp + '&deg;C' + '|' + val.main +','+val.description
            });
            $("showWeatherForcast").html(wf);
        }
    });

})
}
}

export Wheather*/
