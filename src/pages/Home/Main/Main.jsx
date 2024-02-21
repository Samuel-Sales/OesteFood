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
                <Link className="text-custom-red border-b border-custom-red font-medium text-base ml-12" to=''>Ler mais sobre o modo de preparo</Link>
            </section>

            <section className="text-center text-custom-black">
                <h2 className="font-semibold text-2xl mt-14 mb-20">Mais populares</h2>
                <img className="ml-20 mb-8" src="/RamenDeFrango.svg" alt="Ramen de Frango" />
                <p className="mb-4 font-medium text-2xl">Ramen de Frango</p>
                <p className="mb-3.5 font-normal text-base text-custom-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="font-normal text-3xl">R$ 30</p>
            </section>

            <section className="text-center text-custom-black mt-14">
                <img className="ml-20 mb-8" src="/RamenApimentado.svg" alt="Ramen de Frango" />
                <p className="mb-4 font-medium text-2xl">Ramen Apimentado</p>
                <p className="mb-3.5 font-normal text-base text-custom-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="font-normal text-3xl">R$ 30</p>
            </section>

            <section className="text-center text-custom-black mt-14">
                <img className="ml-20 mb-8" src="/RamenTradicional.svg" alt="Ramen de Frango" />
                <p className="mb-4 font-medium text-2xl">Ramen Tradicional</p>
                <p className="mb-3.5 font-normal text-base text-custom-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="font-normal text-3xl">R$ 30</p>
            </section>
        </>
    );
};