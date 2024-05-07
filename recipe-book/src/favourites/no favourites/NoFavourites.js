import style from "../FavouriteListPage.module.css";


function NoFavourites() {
    return (
        <div className={style['no-favourites-div']}>
            <p className={style['no-favourites']}>Wow so empty! You should add some recipes to your
                favourites.</p>
        </div>
    );
}

export default NoFavourites;