const Error404 = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <img
          className="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
          alt=""
        />
        <img
          className="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
          alt=""
        />
        <img
          className="md:hidden"
          src="https://i.ibb.co/8gTVH2Y/Group-198.png"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Un problème d'entrée ou de connexion incorrecte s'est produit!
        </h1>
        <p className="py-4 text-base text-gray-800">
          Le contenu que vous recherchez n'existe pas. Soit il a été supprimé,
          soit vous avez mal saisi le lien.
        </p>
        <p className="py-2 text-base text-gray-800">
          Nous en sommes désolés ! Veuillez visiter notre page d'accueil pour
          vous rendre là où vous devez aller.
        </p>
      </div>
    </div>
  );
};

export default Error404;
