import { useEffect } from "react";
import AppRouter from "./AppRouter";

function App() {

  useEffect(() => {
    const hotels = [
      { "id": 1, "imagePath": "https://www.plazahoteis.com.br/saorafael/wp-content/uploads/sites/3/2018/06/dsc09744.jpg", "city": "Porto Alegre", "state": "RS", "title": "Hotel Porto Alegre", "note": 4, "price": 250, "promo": true },
      { "id": 2, "imagePath": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/73/2a/e2/exterior.jpg?w=1200&h=-1&s=1", "city": "São Paulo", "state": "SP", "title": "Hotel São Paulo", "note": 5, "price": 600, "promo": true },
      { "id": 3, "imagePath": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/127442111.jpg?k=6d5308175d8c17c11394fdc52dfd489b99c8db82570448d9eb79462adf354fcf&o=&hp=1", "city": "Rio de Janeiro", "state": "RJ", "title": "Hotel Rio Beach", "note": 3, "price": 300, "promo": true },
      { "id": 4, "imagePath": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293942948.jpg?k=e5e85bcda86ef047182bd5ed89545de2b9f6d4507225084f4b53f63a8ffcc4dd&o=&hp=1", "city": "Belo Horizonte", "state": "MG", "title": "Hotel Belo Horizonte", "note": 4, "price": 230, "promo": true },
      { "id": 5, "imagePath": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/41/89/18/exterior-view.jpg?w=1200&h=-1&s=1", "city": "Curitiba", "state": "PR", "title": "Hotel Curitiba Center", "note": 5, "price": 290, "promo": false },
      { "id": 6, "imagePath": "https://caravelle-palace-hotel.hoteis-em-suldobrasil.com/data/Images/OriginalPhoto/727/72743/72743795/image-curitiba-caravelle-palace-hotel-1.JPEG", "city": "Florianópolis", "state": "SC", "title": "Hotel Floripa", "note": 4, "price": 320, "promo": false },
      { "id": 7, "imagePath": "https://mabu-business.allcuritibahotels.com/data/Pics/OriginalPhoto/6799/679903/679903251/pic-mabu-business-hotel-curitiba-1.JPEG", "city": "Brasília", "state": "DF", "title": "Hotel Brasília Premium", "note": 5, "price": 450, "promo": false },
      { "id": 8, "imagePath": "https://www.hotels-curitiba.net/data/Pics/OriginalPhoto/10393/1039369/1039369999/pic-granville-park-hotel-curitiba-18.JPEG", "city": "Recife", "state": "PE", "title": "Hotel Recife Praia", "note": 3, "price": 270, "promo": false },
      { "id": 9, "imagePath": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/114526137.webp?k=4c19d5674dee53bff19a393e685e6ea61401f543cba0d9fe1d8bf8ec89f38fdf&o=", "city": "Salvador", "state": "BA", "title": "Hotel Salvador Classic", "note": 4, "price": 310, "promo": false },
      { "id": 10, "imagePath": "https://lirp.cdn-website.com/da7e3151/dms3rep/multi/opt/BOURBON_CWB_TBF6230-3a7140a5-640w.jpg", "city": "Fortaleza", "state": "CE", "title": "Hotel Fortaleza Mar", "note": 4, "price": 340, "promo": false },
      { "id": 11, "imagePath": "https://images.trvl-media.com/lodging/2000000/1130000/1127100/1127042/d91d6836.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", "city": "Manaus", "state": "AM", "title": "Hotel Manaus Amazônia", "note": 3, "price": 250, "promo": false },
      { "id": 12, "imagePath": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241649713.jpg?k=428db35a177e2ee7ba2d596d2af0063bd0449ce19471ced7cbb2474c8f2fdd18&o=&hp=1", "city": "Belém", "state": "PA", "title": "Hotel Belém Vista", "note": 4, "price": 280, "promo": false },
      { "id": 13, "imagePath": "https://s3.sa-east-1.amazonaws.com/nacionalinn-site/imgs/galeria/sao-paulo-inn/recepcao.jpg", "city": "São Luís", "state": "MA", "title": "Hotel São Luís Centro", "note": 5, "price": 300, "promo": false },
      { "id": 14, "imagePath": "https://www.castelodeitaipavahoteis.com.br/upload/explorar/original/gran-villagio-hotel-sp--06-11-2023-08-32-231-4747.webp", "city": "Teresina", "state": "PI", "title": "Hotel Teresina Business", "note": 3, "price": 230, "promo": false },
      { "id": 15, "imagePath": "https://images.trvl-media.com/lodging/27000000/26740000/26731900/26731848/e8c4d17e.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill", "city": "João Pessoa", "state": "PB", "title": "Hotel João Pessoa Mar", "note": 4, "price": 260, "promo": false },
      { "id": 16, "imagePath": "https://q-xx.bstatic.com/xdata/images/hotel/max500/498175142.jpg?k=a70e1a19c3ed0884e7a0a25fde7a438942021f4366555f60f241cded7a03e683&o=", "city": "Natal", "state": "RN", "title": "Hotel Natal Luxo", "note": 5, "price": 320, "promo": false },
      { "id": 17, "imagePath": "https://images.oyoroomscdn.com/uploads/hotel_image/57094/99d5ba0967a834af.jpg", "city": "Maceió", "state": "AL", "title": "Hotel Maceió Praia", "note": 4, "price": 270, "promo": false },
      { "id": 18, "imagePath": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ec/11/4f/entrada.jpg?w=1200&h=-1&s=1", "city": "Aracaju", "state": "SE", "title": "Hotel Aracaju Central", "note": 3, "price": 240, "promo": false },
      { "id": 19, "imagePath": "https://www.queroviajarmais.com/wp-content/uploads/2019/06/hoteis-porto-alegre-radisson.jpg", "city": "Campo Grande", "state": "MS", "title": "Hotel Campo Grande", "note": 4, "price": 260, "promo": false },
      { "id": 20, "imagePath": "https://corporativo.kennedyviagens.com.br/wp-content/uploads/2022/08/Os-melhores-hoteis-perto-do-Aeroporto-de-Porto-Alegre.jpg", "city": "Cuiabá", "state": "MT", "title": "Hotel Cuiabá Premium", "note": 5, "price": 310, "promo": false },
      { "id": 21, "imagePath": "https://s3.sa-east-1.amazonaws.com/nacionalinn-site/imgs/galeria/dan-inn-porto-alegre/fachada.jpg", "city": "Porto Velho", "state": "RO", "title": "Hotel Porto Velho", "note": 3, "price": 220, "promo": false }
    ];

    if (!localStorage.getItem("hotels")) {
      localStorage.setItem("hotels", JSON.stringify(hotels));
      console.log("Hoteis base adicionados");
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
