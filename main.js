
const URL = "https://hp-api.herokuapp.com/";

$("body").append(
    `<div id="personajes" class="btn btn-success col-auto m-1">Personajes</div>`
);

$("#personajes").click (() => {
    $.get(`${URL}api/characters`, function (res, state){
        if (state === "success") {
            console.log(res);
            for (const {name, house} of res) {
                $(".row").append(`
                <div class="card col-sm-3 m-1">
                    <div class="h3">${name}</div>
                    <div>${house}</div>
                </div>`);
            }
        }
    });
})