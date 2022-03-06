import React from "react";

/**
 * Função que irá retornar a renderização do botão de play e pause
 * @param {*} props.isPlay - Indica se o tempo está contando ou não para mudança do icone
 * @param {*} props.isConcentration - Indica se o tempo está em concentração ou pausa
 * @returns A renderização de um botão
 */
function BtnPlayPause(props) {
    /**Variável que irá armazenar a cor de acordo com o status do tempo*/
    var color = props.isConcentration ? "#E63635" : "#79C061";
    /**Variável com o valor do icone do botão */
    var icon = props.isPlay ?
        <svg width="45" height="45" viewBox="0 0 100 100" className={`fill-white`} xmlns="http://www.w3.org/2000/svg">
            <path d="M27.4441 19.4012L76.432 47.6842C78.4068 48.8244 78.4068 51.6756 76.432 52.8158L27.4441 81.0988C25.4694 82.2389 23 80.8134 23 78.533V21.967C23 19.6866 25.4681 18.2611 27.4441 19.4012Z" />
            <path d="M76.432 47.6842L27.4441 19.4012C27.1486 19.2313 26.8429 19.1349 26.536 19.0728L73.8954 46.4159C75.8702 47.5561 75.8702 50.4073 73.8954 51.5475L24.9075 79.8304C24.4649 80.0854 23.9994 80.1957 23.5403 80.2122C24.3723 81.4019 26.0274 81.9155 27.4441 81.0987L76.432 52.8158C78.4068 51.6756 78.4068 48.8244 76.432 47.6842Z" />
        </svg> :
        <svg width="45" height="45" viewBox="0 0 100 100" className={`fill-white`} xmlns="http://www.w3.org/2000/svg">
            <path d="M37.5 18.75H31.25C29.5924 18.75 28.0027 19.4085 26.8306 20.5806C25.6585 21.7527 25 23.3424 25 25V75C25 76.6576 25.6585 78.2473 26.8306 79.4194C28.0027 80.5915 29.5924 81.25 31.25 81.25H37.5C39.1576 81.25 40.7473 80.5915 41.9194 79.4194C43.0915 78.2473 43.75 76.6576 43.75 75V25C43.75 23.3424 43.0915 21.7527 41.9194 20.5806C40.7473 19.4085 39.1576 18.75 37.5 18.75Z" />
            <path d="M68.75 18.75H62.5C60.8424 18.75 59.2527 19.4085 58.0806 20.5806C56.9085 21.7527 56.25 23.3424 56.25 25V75C56.25 76.6576 56.9085 78.2473 58.0806 79.4194C59.2527 80.5915 60.8424 81.25 62.5 81.25H68.75C70.4076 81.25 71.9973 80.5915 73.1694 79.4194C74.3415 78.2473 75 76.6576 75 75V25C75 23.3424 74.3415 21.7527 73.1694 20.5806C71.9973 19.4085 70.4076 18.75 68.75 18.75Z" />
        </svg>;

    return (
        <button className={`flex shadow-sm shadow-slate-500 dark:shadow-slate-100 justify-center items-center w-[70px] h-[70px] border-2 hover:scale-105 bg-[${color}] border-none rounded-[44px]`} onClick={props.onClick}>
            {icon}
        </button>
    );
}


export default BtnPlayPause;