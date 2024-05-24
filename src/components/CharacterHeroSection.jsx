import Paragraph from '../components/Paragraph'


const CharacterHeroSection = () => {

    const paragraph = "play the following games. One win gives you One magical item. to save the forest gather all three items!"
  return (
    <div>
        <div className="lg:z-0 mt-[200px] flex flex-col gap-[100px] items-center justify-center">
            <h1 className="lg:font-bold text-5xl text-center text-primary_light">Hi, I'm Woodsy</h1>
            <img width={546} className="" src="../../public/landing/WoodsySpirit.png" alt="Woodsy Spirit" />
        </div>

        <img className="lg:z-5 relative left-[65%] bottom-[580px]" src="../../public/landing/Speech1.svg" />
        <img className="lg:z-5 relative left-[15%] bottom-[710px]" src="../../public/landing/Speech2.svg" />

        <div className="lg:w-[450px] flex z-5 gap-5 relative bottom-[720px] left-[15%]">
            <img src="../../public/landing/SpellsItem.svg" alt="" />
            <img src="../../public/landing/ElixirItem.svg" alt="" />
            <img src="../../public/landing/GlobeItem.svg" alt="" />
        </div>

        <div className="lg:z-6 -mt-[25rem] text-center items-center flex justify-center mb-[200px]">
            {/*<Paragraph value={paragraph} />*/}
            <Paragraph value={paragraph}/>
        </div>
            
      
    </div>
  )
}

export default CharacterHeroSection
