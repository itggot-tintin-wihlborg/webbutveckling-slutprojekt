function ingred(event){

    if (event == 1){

        var ingredient = document.getElementById("1")

    } else if (event == 2){

        var ingredient = document.getElementById("2")

    } else if (event == 3){

        var ingredient = document.getElementById("3")

    } else if (event == 4){

        var ingredient = document.getElementById("4")

    } else if (event == 5){

        var ingredient = document.getElementById("5")

    } else if (event == 6){

        var ingredient = document.getElementById("6")

    }

    ingredient.classList.toggle("disabled")

}