import { Link } from "react-router-dom";
import Botao from "../../../components/Botao/Botao";

export default function Main() {
    return (
        <>
            <section className="mt-14">
                <h1 className="font-semibold text-3xl text-custom-black mb-6 ml-6">Comida Oriental</h1>
                <p className="font-normal text-base text-custom-black ml-6 mb-8">
                    A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.
                </p>
                <Botao />
                <img className="mt-12 ml-6 mr-auto" src="/imagemSegurandoPrato.svg" alt="Imagem segurando o prato" />
            </section>

            <section className="mt-14">
                <h2 className="font-semibold text-2xl text-center text-custom-black mb-6">Feita de forma Tradicional</h2>
                <p className="font-normal text-base text-center ml-3 mr-3 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link className="text-custom-red border-b border-custom-red font-medium text-base ml-12 mb-14" to=''>Ler mais sobre o modo de preparo</Link>
            </section>
        </>
    );
};