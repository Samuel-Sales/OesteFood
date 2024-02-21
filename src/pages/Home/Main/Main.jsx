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
            </section>
        </>
    );
};