import HomeLoginButton from "./components/HomeLoginButton";
import HomeSignUpButton from "./components/HomeSignUpButton";

export default function Home() {
    return (
        <main className="flex flex-col">
            <section className="w-full self-center z-[1] flex justify-between gap-5 py-3 items-start max-md:max-w-full max-md:flex-wrap">
                <div className="justify-center mt-2 text-sm font-black leading-4 text-center text-gray-800 grow whitespace-nowrap">
                    is now available. Step into the future today!
                </div>
                <div className="items-stretch self-stretch justify-center px-3 py-2 text-xs font-black leading-3 text-center text-white rounded-md whitespace-nowrap">
                    See what's new
                </div>
            </section>
            <header className="flex flex-col items-stretch self-stretch w-full bg-white pb-9 max-md:max-w-full">
                <div className="flex flex-col items-center w-full bg-white bg-opacity-0 rounded-lg shadow-lg py-7 max-md:max-w-full max-md:px-5">
                    <div className="z-[1] flex w-full max-w-[1325px] justify-between gap-5 -mb-1.5 items-start max-md:max-w-full max-md:flex-wrap">
                        <div className="flex items-start justify-between gap-12 mt-3.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                            <img
                                alt=""
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47ad6d68663a9a71fdb073ebe54c65bb12a65ee09b10f9a62174cd01c4ba8ab1?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                className="aspect-[3.17] object-contain object-center w-[146px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                            />{" "}
                            <div className="flex items-center self-center gap-2">
                                <div className="self-center justify-center my-auto text-sm font-bold leading-5 text-center text-gray-800">
                                    Product
                                </div>
                                <img
                                    alt=""
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc7bd64fb14844fe0d18ef8b5db8e318048ab562220c21804dea7855d8836f76?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.43] object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="flex items-center self-center gap-2">
                                <div className="self-center justify-center my-auto text-sm font-bold leading-5 text-center text-gray-800">
                                    Solutions
                                </div>{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/44be1f905ef16760c4c51e1b5db442f2221510bc8cab0a0501b0f712c078ff7c?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.43] object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="flex items-center self-center gap-2">
                                <div className="self-center justify-center my-auto text-sm font-bold leading-5 text-center text-gray-800">
                                    Learn
                                </div>{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f09c581181830ac04008fed0356cf3167adad3834ddf823f25db51e8f8edb0?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.43] object-contain object-center w-2.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                />
                            </div>
                            <div className="self-center justify-center my-auto text-sm font-bold leading-5 text-gray-800">
                                Pricing
                            </div>{" "}
                            <div className="self-center justify-center my-auto text-sm font-bold leading-5 text-gray-800 grow whitespace-nowrap">
                                Enterprise
                            </div>
                        </div>
                        <div className="flex items-center self-stretch justify-between gap-[9px] max-md:justify-center">
                            <div className="justify-center my-auto mr-[42px] text-sm font-bold leading-5 text-center text-gray-800 grow whitespace-nowrap">
                                Contact Sales
                            </div>
                            <HomeSignUpButton />
                            <HomeLoginButton />
                        </div>
                    </div>
                </div>
            </header>
            <div className="self-center flex w-full max-w-[1708px] flex-col items-center mt-16 max-md:max-w-full max-md:mt-10">
                <img
                    alt=""
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05792170a6d8655b097fe165c7ba0d75bb7f13d984af829eb3c54fafe66cad7?apiKey=ebc0f8a639494adab84738898fc3c240&"
                    className="aspect-[9.67] object-contain object-center w-[232px] overflow-hidden max-w-full"
                />{" "}
                <div className="justify-center text-center text-7xl font-black leading-[86px] bg-clip-text max-w-[549px] mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10">
                    <img
                        className="one-app-to-replace"
                        alt="One app to replace"
                        src="https://cdn.animaapp.com/projects/65805117f31dea0c1aa7d377/releases/658052cbf99edd8088028e42/img/one-app-to-replace-them-all@2x.png"
                    />
                </div>{" "}
                <div className="justify-center text-slate-800 text-center text-2xl font-extrabold leading-9 max-w-[469px] mt-7 max-md:max-w-full">
                    <span className="font-extrabold">
                        Get everyone working in a single platform
                        <br />
                    </span>
                    <span className="">designed to manage any type of work.</span>
                </div>{" "}
                <div className="shadow-sm flex w-[421px] max-w-full flex-col justify-center items-stretch mt-8 rounded-xl">
                    <div
                        style={{
                            background:
                                "linear-gradient(84deg, #45C4F9 0%, #7D09FF 50.33%, #FF0BE5 100%)",
                        }}
                        className="flex flex-col items-center justify-center h-16 rounded-2xl max-md:max-w-full"
                    >
                        <div className="text-2xl font-bold text-center text-white">
                            Get Started. It's FREE
                        </div>
                    </div>
                </div>
                <div className="flex gap-2.5 mt-4 items-start max-md:justify-center">
                    <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1873e9b874eef516225e792af576397d81a321cdc6c36f06ea4d0b0b93792c0e?apiKey=ebc0f8a639494adab84738898fc3c240&"
                        className="aspect-[6.07] object-contain object-center w-[85px] overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    <div className="justify-center text-sm font-medium leading-5 text-slate-500">
                        based on 10,000+ reviews from
                    </div>
                    <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fadfab5ea268b6eea23cb85af33219a1c82433f0ddb4eca9a8c456818318d707?apiKey=ebc0f8a639494adab84738898fc3c240&"
                        className="aspect-[5.79] object-contain object-center w-[81px] overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                </div>
                <img
                    alt=""
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/893c85c156c00edc60bb5d524e67fe0f40a8758b33681491f4efa9f61fac90a8?apiKey=ebc0f8a639494adab84738898fc3c240&"
                    className="aspect-[1.47] object-contain object-center w-full justify-center items-center overflow-hidden max-w-[1496px] mt-40 max-md:max-w-full max-md:mt-10"
                />
                <div
                    style={{
                        background:
                            "linear-gradient(270deg, #FA12E3 1.83%, #7612FA 53.68%, #12D0FA 100%)",
                        backgroundClip: "text",
                    }}
                    className="text-transparent mt-40 justify-center text-center text-6xl font-black leading-[74px] bg-clip-text max-md:max-w-full max-md:text-4xl max-md:leading-[55px]"
                >
                    Save time and
                    <br />
                    get more done
                </div>
                <div className="justify-center text-xl font-medium leading-8 text-center text-slate-800 mt-7">
                    Supercharge productivity. Streamline work
                    <br />
                    by doing it, and seeing it, in one place.
                </div>
                <div className="w-full max-w-[1570px] mt-20 max-md:max-w-full max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10">
                                <div className="text-transparent bg-gradient-to-r from-[#12D0FA] to-[#FA12E3] justify-center text-4xl font-black leading-[50px] bg-clip-text max-md:max-w-full">
                                    Improve collaboration
                                </div>
                                <div className="justify-center mt-4 text-base font-extrabold leading-6 text-slate-800 max-md:max-w-full">
                                    <span className="font-extrabold">
                                        Get your teams working together more closely, even if
                                        they’re far
                                        <br />
                                        apart.
                                    </span>
                                    <span className="font-medium">
                                        {" "}
                                        Centralize project-related communications in one place,
                                        <br />
                                        brainstorm ideas with Whiteboards, and draft plans together
                                        with
                                        <br />
                                        collaborative Docs.
                                    </span>
                                </div>
                                <div className="flex items-stretch justify-between gap-1.5 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                    <div className="items-stretch justify-center px-4 py-3 text-base leading-6 text-center text-gray-800 bg-white border border-solid rounded-lg shadow-sm whitespace-nowrap bg-opacity-20 grow border-slate-300">
                                        Comments
                                    </div>
                                    <div className="justify-center text-gray-800 text-center text-base leading-6 whitespace-nowrap items-stretch border shadow-sm bg-white bg-opacity-20 aspect-[1.8529411764705883] px-3.5 py-3 rounded-lg border-solid border-slate-300">
                                        Docs
                                    </div>
                                    <div className="items-stretch justify-center px-4 py-3 text-base leading-6 text-center text-gray-800 bg-white border border-solid rounded-lg shadow-sm whitespace-nowrap bg-opacity-20 grow border-slate-300">
                                        Whiteboards
                                    </div>
                                    <div className="justify-center text-gray-800 text-center text-base leading-6 whitespace-nowrap items-stretch border shadow-sm bg-white bg-opacity-20 aspect-[1.8235294117647058] px-3.5 py-2.5 rounded-lg border-solid border-slate-300">
                                        Clips
                                    </div>
                                </div>
                                <div className="justify-center text-slate-500 text-opacity-60 text-4xl font-extrabold leading-[50px] mt-14 max-md:max-w-full max-md:mt-10">
                                    Enhance visibility
                                </div>
                                <div className="justify-center text-slate-500 text-opacity-60 text-4xl font-extrabold leading-[50px] mt-11 max-md:max-w-full max-md:mt-10">
                                    Automate work
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                alt=""
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/abbc8bac049bf9411b0285a1a6e0e1430d32a650cc7cd05024156d36a1d45cc6?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                className="aspect-[1.65] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-col justify-center items-center overflow-hidden self-stretch relative flex min-h-[360px] w-full mt-28 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5410f35ddd7d2d3ce9623245e4d010894b86cd53287d3be21d5ed315664798?apiKey=ebc0f8a639494adab84738898fc3c240&"
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />
                <div className="relative flex w-full max-w-[1344px] flex-col items-center mt-2.5 mb-28 max-md:max-w-full max-md:mb-10">
                    <div className="flex items-center gap-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="justify-center my-auto text-base font-extrabold leading-6 text-center text-slate-800 grow shrink basis-auto max-md:max-w-full">
                            Over 2+ million teams rely on ClickUp to collaborate and get work done.
                        </div>
                        <div className="justify-center text-slate-800 text-center text-base font-extrabold leading-4 whitespace-nowrap items-stretch bg-slate-100 self-stretch px-3.5 py-3 rounded-lg">
                            Join them
                        </div>
                    </div>
                    <div className="flex items-start self-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a5530deeba40e73f42d7c98a5b5b6e1d61205ea0bda4f0eb893b846a03107cf?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[7.75] object-contain object-center w-[124px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af8c66d7e856106caa145aa8df0aab4426aec58f912f96a63ea1a199d03974f?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[3.89] object-contain object-center w-[105px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e00dfef8c8a49167649608cf18dc4d66c07c5b8ca3b28c3949c29d4d9862a7a9?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[5.74] object-contain object-center w-[132px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/694a51028e58190c9239256ef2d6bbedcf771933d5f59877f4e528d0f557cf44?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[2.46] object-contain object-center w-16 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d29f363ae1a4459630d70ad2d5d4310f96491d19b969d5acf68de5a9fb57323?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[3.64] object-contain object-center w-20 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/658af7ac98b2ca4102e1510b33fbff44327540b3c1b8c140b82fb12997a92ec5?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[3.27] object-contain object-center w-[108px] overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0d7f9d94216d8bd9ebc0dd78a566f657b812345fd29e0f71a8cd425e0f53578?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[3.6] object-contain object-center w-[90px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                        />
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93aa2c079236c49e6cfcc37f6e3c6356bfe7efdc1ed6c319162250106d309420?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[4.15] object-contain object-center w-[137px] overflow-hidden self-stretch shrink-0 max-w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex-col overflow-hidden self-stretch relative z-[1] flex min-h-[1145px] mt-0 w-full items-center pb-11 px-16 max-md:max-w-full max-md:px-5">
                <img
                    alt=""
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca903be02f384732bc17649e4b42a974d976a74bef2feb026dc7f332c8f4169a?apiKey=ebc0f8a639494adab84738898fc3c240&"
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />
                <div className="flex-col relative justify-center items-center overflow-hidden flex min-h-[1100px] w-[1100px] max-w-full px-16 py-12 max-md:px-5">
                    <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/218205c6ff5614bbdc73e7bca8143482e693c087e0866032219c1646601ae175?apiKey=ebc0f8a639494adab84738898fc3c240&"
                        className="absolute inset-0 object-cover object-center w-full h-full"
                    />
                    <div className="relative bg-white bg-opacity-90 flex w-[891px] max-w-full flex-col justify-center items-center mt-14 mb-9 px-16 py-12 rounded-[445.5px] max-md:mt-10 max-md:px-5">
                        <div className="flex flex-col items-center max-w-full mt-60 mb-44 max-md:my-10">
                            <div className="justify-center text-center text-6xl font-black leading-[74px] bg-clip-text self-center max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
                                Bring teams and
                                <br />
                                work together
                            </div>
                            <div className="self-stretch justify-center text-xl font-extrabold leading-8 text-center text-slate-800 mt-7 max-md:max-w-full">
                                Eliminate app chaos. Consolidate tools and cut costs.
                            </div>
                            <div className="shadow-sm flex w-[421px] max-w-full flex-col justify-center items-stretch mt-8 rounded-xl">
                                <div
                                    style={{
                                        background:
                                            "linear-gradient(84deg, #45C4F9 0%, #7D09FF 50.33%, #FF0BE5 100%)",
                                    }}
                                    className="flex flex-col items-center justify-center h-16 rounded-2xl max-md:max-w-full"
                                >
                                    <div className="text-2xl font-bold text-center text-white">
                                        Get Started
                                    </div>
                                </div>
                            </div>
                            <div className="self-center justify-center mt-5 text-sm font-medium leading-6 text-center text-slate-500">
                                Free forever. No credit card required.
                                <br />
                                Join 2+ million teams today!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-transparent bg-gradient-to-r from-[#12D0FA] to-[#FA12E3] justify-center text-center text-6xl font-black leading-[74px] bg-clip-text self-center mt-28 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10">
                Perfect fit for every team
            </div>
            <div className="self-center justify-center text-xl font-extrabold leading-8 text-center text-gray-800 mt-7 max-md:max-w-full">
                <span className="font-extrabold">
                    Get started fast with out-of-the-box solutions.
                    <br />
                </span>
                <span className="">Easily customize ClickUp as team needs grow!</span>
            </div>
            <img
                alt=""
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f298108adcc0674fdedaf03bea01f51b97357ae966f5ed8220134bdb1385491?apiKey=ebc0f8a639494adab84738898fc3c240&"
                className="aspect-[2.03] object-contain object-center w-[1299px] justify-center items-center overflow-hidden self-center max-w-full mt-8"
            />
            <div className="flex-col justify-center items-center overflow-hidden self-stretch relative flex min-h-[1430px] w-full max-md:max-w-full">
                <img
                    alt=""
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8f9051df29cc0c66df70dde110d4038b3239c4ff7db120c71ad295902dcae52?apiKey=ebc0f8a639494adab84738898fc3c240&"
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />
                <div className="relative self-stretch flex min-h-[100px] w-full flex-col max-md:max-w-full" />
                <div className="relative justify-center text-center text-white text-4xl font-black leading-[50px] bg-clip-text self-center whitespace-nowrap mt-[560px] max-md:mt-10">
                    Ready to unleash your
                </div>
                <div className="relative justify-center text-center text-white text-4xl font-black leading-[82px] bg-clip-text self-center max-w-[392px]">
                    team's full potential?
                </div>{" "}
                <div className="relative self-center w-[567px] max-w-full mt-12 max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                            <div className="flex items-center justify-center w-full h-16 text-lg font-extrabold leading-4 text-center text-indigo-800 bg-white border border-purple-900 border-solid grow rounded-2xl border-opacity-60 max-md:px-5">
                                YES, lets do this
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex items-center justify-center w-full h-16 text-2xl font-medium leading-4 text-center text-white bg-white border border-white border-solid border-opacity-20 whitespace-nowrap bg-opacity-10 grow rounded-xl max-md:px-5">
                                Show me more
                            </div>
                        </div>
                    </div>
                </div>{" "}
                <div className="relative self-center justify-center mt-6 text-xl font-medium leading-7 text-center text-violet-500">
                    <span className="text-violet-400">
                        Free forever. No credit card required.
                        <br />
                    </span>
                    <span className="text-violet-500">Join 2+ million teams today!</span>
                </div>{" "}
                <div className="relative self-stretch flex min-h-[100px] w-full flex-col mt-96 max-md:max-w-full max-md:mt-10" />
            </div>{" "}
            <div className="text-transparent bg-gradient-to-r from-[#12D0FA] to-[#FA12E3] justify-center text-center text-6xl font-black leading-[74px] bg-clip-text self-center mt-36 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10">
                All teams love ClickUp
            </div>{" "}
            <div className="self-center justify-center text-xl font-bold leading-8 text-center text-slate-800 mt-7 max-md:max-w-full">
                <span className="font-bold">
                    Teams love how ClickUp helps them get things done efficiently.
                    <br />
                </span>
                <span className="">
                    But don’t take our word for it, hear it directly from them.
                </span>
            </div>{" "}
            <div className="self-center z-[1] w-[1205px] max-w-full mt-20 max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                        <img
                            alt=""
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b0c01fbd073bcbbe9d5d634c92a8c5c4f3db3f7044fff2b22800754a453e8e23?apiKey=ebc0f8a639494adab84738898fc3c240&"
                            className="aspect-[0.69] object-contain object-center w-full shadow-sm backdrop-blur-none overflow-hidden grow max-md:mt-6"
                        />
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-stretch w-full pb-12 bg-white bg-opacity-0 shadow-sm backdrop-blur-none grow rounded-2xl max-md:mt-6">
                            <div className="flex-col overflow-hidden relative flex aspect-[0.8690744920993227] w-full items-stretch mb-11 pt-12 max-md:mb-10">
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0687cb001fca7a90d9053ef4ff3a23d80cffb688c3dbbd8071b16a604ce1a2c1?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="absolute inset-0 object-cover object-center w-full h-full"
                                />{" "}
                                <div className="relative z-[1] flex mb-0 flex-col mt-56 px-10 py-9 items-start max-md:mt-10 max-md:mb-2.5 max-md:px-5">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ec5c82f347c6abc0fa9cd3a5d4391654239a1d35dfc2ecef875325d2b295fb8?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                        className="aspect-[5.58] object-contain object-center w-[145px] overflow-hidden max-w-full"
                                    />{" "}
                                    <div className="self-stretch justify-center text-xl font-medium leading-7 text-white mt-11 max-md:mt-10">
                                        <span className="font-medium">
                                            “ClickUp is how our teams
                                            <br />
                                        </span>
                                        <span className="font-bold">centralize work</span>
                                        <span className="font-medium">
                                            , stay on track,
                                            <br />
                                            and easily collaborate.”
                                        </span>
                                    </div>{" "}
                                    <div className="justify-center items-center bg-white bg-opacity-10 self-stretch flex w-full flex-col mt-8 px-16 py-3.5 rounded-2xl max-md:px-5">
                                        <div className="flex items-stretch gap-5">
                                            <div className="justify-center text-sm font-medium leading-4 text-white">
                                                Read story
                                            </div>{" "}
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df3a408758cd54c1855c65e0362ad44c6ae249778f2bcc798f5a4afffe871d4?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                                className="self-center object-contain object-center w-2 max-w-full my-auto overflow-hidden aspect-square shrink-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col items-stretch justify-center w-full bg-white bg-opacity-0 shadow-sm backdrop-blur-none grow rounded-2xl max-md:mt-6">
                            <div className="flex-col overflow-hidden relative flex aspect-[0.6875] w-full items-stretch pt-12">
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/17093640b213474431bed5b28bf9245de1c3168a212c557f224e37fd71119549?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="absolute inset-0 object-cover object-center w-full h-full"
                                />{" "}
                                <div className="relative flex flex-col items-start px-10 mt-56 py-9 max-md:mt-10 max-md:px-5">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0b1814d25707c1ef1375553d90be182cbf4a3dee8bd33b560adc1805fe33e58?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                        className="aspect-[3.67] object-contain object-center w-[110px] justify-center items-center overflow-hidden max-w-full"
                                    />{" "}
                                    <div className="self-stretch justify-center text-xl font-medium leading-7 text-white mt-11 max-md:mt-10">
                                        <span className="font-medium">“ClickUp has helped us </span>
                                        <span className="font-bold">
                                            3x our
                                            <br />
                                            productivity
                                        </span>
                                        <span className="font-medium">
                                            {" "}
                                            without having
                                            <br />
                                            to scale our team.”
                                        </span>
                                    </div>{" "}
                                    <div className="justify-center items-center bg-white bg-opacity-10 self-stretch flex w-full flex-col mt-9 px-16 py-3.5 rounded-2xl max-md:px-5">
                                        <div className="flex items-stretch gap-5">
                                            <div className="justify-center text-sm font-medium leading-4 text-white">
                                                Read story
                                            </div>{" "}
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dde6060ba155da865eec86476a52eba6bca84cde11dbc3cd3959c501b8dcff3?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                                className="self-center object-contain object-center w-2 max-w-full my-auto overflow-hidden aspect-square shrink-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className="flex-col justify-center items-center overflow-hidden self-stretch relative flex min-h-[510px] w-full px-16 py-12 max-md:max-w-full max-md:px-5">
                <img
                    alt=""
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec0a3abb7dc8a493a724fc774237cabd6b44d318a0e4c71b31f40477e28889e?apiKey=ebc0f8a639494adab84738898fc3c240&"
                    className="absolute inset-0 object-cover object-center w-full h-full"
                />{" "}
                <div className="relative flex w-[1288px] max-w-full flex-col items-center mt-20 mb-11 max-md:my-10">
                    <div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                        <div className="justify-center my-auto text-base font-extrabold leading-6 text-slate-800 grow shrink basis-auto max-md:max-w-full">
                            95% of users increased their productivity after switching to ClickUp.
                        </div>{" "}
                        <div className="justify-center text-slate-800 text-center text-sm font-bold leading-6 whitespace-nowrap items-stretch bg-slate-100 self-stretch px-3.5 py-3 rounded-lg">
                            Join them
                        </div>
                    </div>{" "}
                    <img
                        alt=""
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7367f3de78a4365f28a22162ccbb0217e54b3efcd7b9f3d6a7a15d8ba7aa897?apiKey=ebc0f8a639494adab84738898fc3c240&"
                        className="aspect-[7.16] object-contain object-center w-full overflow-hidden self-stretch mt-11 max-md:max-w-full max-md:mt-10"
                    />
                </div>
            </div>{" "}
            <div className="flex flex-col self-stretch w-full mt-24 max-md:max-w-full max-md:mt-10">
                <div className="text-transparent bg-gradient-to-r from-[#12D0FA] to-[#FA12E3] justify-center text-center text-6xl font-black leading-[74px] bg-clip-text self-center ml-10 max-md:max-w-full max-md:text-4xl max-md:leading-[55px]">
                    Everything your
                    <br />
                    team is looking for
                </div>{" "}
                <div className="self-center justify-center ml-10 text-xl font-extrabold leading-8 text-center text-gray-800 mt-7 max-md:max-w-full">
                    <span className="font-extrabold">
                        ClickUp’s exceptional flexibility can handle any type of work.
                    </span>
                    <span className="">
                        {" "}
                        And
                        <br />
                        we never stop innovating.
                    </span>
                </div>{" "}
                <div className="self-center w-[1220px] max-w-full ml-10 mt-24 max-md:mt-10">
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch w-full pt-4 grow rounded-xl max-md:mt-8">
                                <div className="flex-col overflow-hidden relative flex aspect-[1.0662983425414365] w-full items-stretch pl-8 pr-14 pt-5 pb-12 max-md:px-5">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d222b628fad957b4506a1d399c929895af1470656bc0781d6c0c838113bdc2c6?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                        className="absolute inset-0 object-cover object-center w-full h-full"
                                    />{" "}
                                    <div className="relative justify-center text-xl font-extrabold leading-7 ">
                                        AI-powered productivity
                                    </div>{" "}
                                    <div className="relative justify-center mt-5 mb-40 text-base font-medium leading-6 max-md:mb-10">
                                        Get work done faster with the only AI-
                                        <br />
                                        powered assistant tailored to your role.
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch w-full pl-5 grow pt-9 rounded-xl max-md:mt-8">
                                <div className="justify-center  text-xl font-extrabold leading-7 whitespace-nowrap ml-3.5 self-start max-md:ml-2.5">
                                    View work your way
                                </div>{" "}
                                <div className="justify-center  text-base font-medium leading-6 max-w-[282px] ml-3.5 mt-5 self-start max-md:ml-2.5">
                                    Instantly switch between 15 views
                                    <br />
                                    including list, board, gan, and more.
                                </div>{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14a35e56bd9031b18d3982b20ef07763363ce38b7f607330ba8ad1c95076f473?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.56] object-contain object-center w-full overflow-hidden mt-8"
                                />
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-center justify-center w-full mx-auto grow py-9 rounded-xl max-md:mt-8">
                                <div className="flex flex-col items-center self-stretch px-9 max-md:px-5">
                                    <div className="self-stretch justify-center text-xl font-extrabold leading-7 ">
                                        Customize in a click
                                    </div>{" "}
                                    <div className="justify-center  text-base font-medium leading-6 max-w-[294px] mt-6">
                                        Configuring ClickUp for different types
                                        <br />
                                        of work is as easy as flipping a switch.
                                    </div>{" "}
                                    <div className="flex items-stretch self-stretch justify-between w-full gap-5 pr-2 mt-14 max-md:mt-10">
                                        <div className="flex items-stretch justify-between gap-4">
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/965895e49a991a86ec5e7c4596309cabeab32ea9e084c9e361ea3a2898d82c2c?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                                className="object-contain object-center w-8 max-w-full overflow-hidden aspect-square shrink-0"
                                            />{" "}
                                            <div className="self-center justify-center my-auto text-base font-medium leading-6 text-white grow whitespace-nowrap">
                                                Time Tracking
                                            </div>
                                        </div>{" "}
                                        <img
                                            alt=""
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/826bfe3c274fe8d1e178ff6a3fe88879a81cd21e09ea30ad7af785918445c2c8?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                            className="aspect-[2.11] object-contain object-center w-[59px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                                        />
                                    </div>
                                </div>{" "}
                                <div className="flex items-stretch self-stretch justify-between w-full gap-5 py-5 pr-8 mt-5 bg-white shadow-sm pl-11 max-md:px-5">
                                    <div className="flex items-stretch justify-between gap-4">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9896a0740f5d2e02da05ccdf3270cfc3cb7ca4e5a1e94986a2b6d34acf20253b?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                            className="aspect-square object-contain object-center w-[31px] overflow-hidden shrink-0 max-w-full"
                                        />{" "}
                                        <div className="self-center justify-center my-auto text-base font-medium leading-6 text-sky-400">
                                            Sprints
                                        </div>
                                    </div>{" "}
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d301f8b5e626454ee986f63cdde8aaec8c8dd406b35ee0b99b66db336a47ebf8?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                        className="aspect-[2.14] object-contain object-center w-[60px] justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                                    />
                                </div>{" "}
                                <div className="flex w-[311px] max-w-full items-stretch justify-between gap-5 mt-5">
                                    <div className="flex items-stretch justify-between gap-4">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/223a5ac73068efcaeda64e3a8b7355b9f538d7682286c9bc4bb0aae4825c99c6?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                            className="aspect-square object-contain object-center w-[31px] overflow-hidden shrink-0 max-w-full"
                                        />{" "}
                                        <div className="self-center justify-center my-auto text-base font-medium leading-6 text-white grow whitespace-nowrap">
                                            Custom Fields
                                        </div>
                                    </div>{" "}
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b882c164d4403b95a752b9af9441dbee5e137ea1b48c6d66033aa41752c1fa2?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                        className="aspect-[2.11] object-contain object-center w-[59px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                <div className="self-center w-[1220px] max-w-full ml-10 mt-8">
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
                            <div className="w-full px-10 grow py-9 rounded-xl max-md:max-w-full max-md:mt-8 max-md:px-5">
                                <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                                        <div className="flex flex-col items-stretch grow max-md:mt-10">
                                            <div className="justify-center text-2xl font-extrabold leading-7">
                                                Plays well with others
                                            </div>{" "}
                                            <div className="justify-center mt-4 text-base font-medium leading-6">
                                                Easily integrates with the
                                                <br />
                                                tools you already use.
                                            </div>{" "}
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92a1033442675931da4b470f3a06445e51ea9d28f13f9ee00b7b3d3ba32f4d6f?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                                className="aspect-[1.44] object-contain object-center w-full justify-center items-center overflow-hidden mt-3"
                                            />
                                        </div>
                                    </div>{" "}
                                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                                        <div className="flex flex-col items-stretch max-md:mt-10">
                                            <div className="justify-center text-2xl font-extrabold leading-7">
                                                Replaces them entirely
                                            </div>{" "}
                                            <div className="justify-center mt-4 text-base font-medium leading-6">
                                                Eliminate app sprawl and
                                                <br />
                                                reduce software spend.
                                            </div>{" "}
                                            <img
                                                alt=""
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f2492ce3d62aae30a1f14554464adfa24d17e206e52c2873a56eaf5a77928e?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                                className="aspect-[1.51] object-contain object-center w-full justify-center items-center overflow-hidden mt-3"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch w-full pt-8 pl-6 pr-px grow rounded-xl max-md:mt-8 max-md:pl-5">
                                <div className="justify-center text-xl font-extrabold leading-7">
                                    Search everything
                                </div>{" "}
                                <div className="justify-center mt-4 text-base font-medium leading-6">
                                    Find any file in ClickUp, a connected
                                    <br />
                                    app, or your local drive, from one place.
                                </div>{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea6db9fa7fc87ca2c44bcaf5930980cc1414990342651b45d3438ff371c59d33?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.54] object-contain object-center w-full overflow-hidden mt-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>{" "}
                <div className="self-center w-[1220px] max-w-full ml-10 mt-8">
                    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
                            <div className="flex flex-col items-stretch w-full pl-6 grow pt-9 rounded-xl max-md:mt-8 max-md:pl-5">
                                <div className="justify-center text-xl font-extrabold leading-7 text-white">
                                    Stay ahead of what’s next
                                </div>{" "}
                                <div className="justify-center mt-5 text-base font-medium leading-6 text-white">
                                    Organize your work, reminders, and
                                    <br />
                                    calendar events all from your
                                    <br />
                                    personalized Home.
                                </div>{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/250d0145c619f7b4d79136fbff621e305b626868c1edff00b464ecca034819f5?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.77] object-contain object-center w-full overflow-hidden mt-8"
                                />
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                alt=""
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bf8ecb13dd229bbacca0bf852dc6508543b6ec2658f8a08e109d0d9d22e34de7?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                className="aspect-[2.17] object-contain object-center w-full border overflow-hidden grow rounded-2xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-8"
                            />
                        </div>
                    </div>
                </div>{" "}
                <div className="flex-col self-stretch relative flex min-h-[962px] items-center mt-40 pb-8 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                    <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/81eacf64ec1d818c1f50520a53cfdcf4b21ceb30b9e19385922ea52a0533d710?apiKey=ebc0f8a639494adab84738898fc3c240&"
                        className="absolute inset-0 object-cover object-center w-full h-full"
                    />{" "}
                    <div className="relative z-[1] flex mt-0 w-[1300px] max-w-full flex-col">
                        <div
                            style={{
                                boxShadow: "0px 16px 78px 0px rgba(41, 45, 52, 0.10)",
                                top: "-30px",
                            }}
                            className="relative flex items-stretch self-stretch justify-between gap-5 overflow-hidden bg-white rounded-lg top-3 pr-14 pb-11 max-md:max-w-full max-md:flex-wrap max-md:pr-5"
                        >
                            <img
                                alt=""
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f97070f1b8cedb1588f16e1aedacc599b2e8b8a3bf8afc7a9ac0e3fe2609ce76?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                className="relative left-[-5px] aspect-[0.7] object-contain object-center w-[99px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                            />{" "}
                            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
                                <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                                    <div className="justify-center text-zinc-800 text-5xl font-extrabold leading-[65px] grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                                        One app to replace them all.
                                    </div>{" "}
                                    <div className="flex flex-col items-stretch justify-center mt-3 rounded-lg shadow-lg bg-violet-500">
                                        <div className="flex items-center h-[55px] w-40 justify-center text-sm font-extrabold leading-5 text-center text-white bg-white bg-opacity-0 rounded-lg shadow-lg whitespace-nowrap">
                                            Free Forever
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="justify-center text-sm leading-6 text-gray-800 max-md:max-w-full">
                                    All of your work in one place: Tasks, Docs, Chat, Goals, & more.
                                </div>
                            </div>
                        </div>{" "}
                        <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-9 mx-8 max-md:flex-wrap max-md:justify-center max-md:mr-2.5">
                            <div className="self-center flex items-stretch gap-2.5 my-auto">
                                <img
                                    alt=""
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbeac183c5b8cf309892433f01dee172d2046a376a3dd099e5ff2e406e6be3a7?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[1.02] object-contain object-center w-[46px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="self-center justify-center my-auto text-base font-bold leading-6 text-white grow whitespace-nowrap">
                                    <span className="font-bold">Free training </span>
                                    <span className="">& 24-hours support</span>
                                </div>
                            </div>{" "}
                            <div className="flex items-stretch justify-between gap-2.5">
                                <img
                                    alt=""
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/86319c86c9e9b1440768e381ae934dc6f4e9580f81a9ad206dad4458e1a25804?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[0.88] object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="self-center justify-center my-auto text-base leading-6 text-white grow whitespace-nowrap">
                                    <span className="">Serious about </span>
                                    <span className="font-bold">security & privacy</span>
                                </div>
                            </div>{" "}
                            <div className="self-center flex items-stretch gap-2.5 my-auto">
                                <img
                                    alt=""
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eaf8be5219ab32aaf0ff1a80bcbe164200b6ee5202a2118c5e794cd2a1ed181?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />{" "}
                                <div className="self-center justify-center my-auto text-base font-bold leading-6 text-white grow whitespace-nowrap">
                                    <span className="font-bold">Highest levels of uptime </span>
                                    <span className="">the last 12 months</span>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex items-start self-stretch justify-between gap-5 pl-3 pr-20 border-t border-b border-solid mt-9 py-11 border-y-white border-y-opacity-30 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                                <div className="justify-center text-xs font-bold leading-5 tracking-normal text-white uppercase">
                                    ClickUp
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Download
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Careers
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    About Us
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    Product Roadmap
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Press
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Clients
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Brand
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Verified
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white whitespace-nowrap">
                                    Affiliate & Referrals
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Reviews
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Status
                                </div>
                            </div>{" "}
                            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                                <div className="justify-center text-xs font-bold leading-5 tracking-normal text-white uppercase">
                                    Resources
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Help Docs
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white whitespace-nowrap">
                                    On-Demand Demo
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Webinars
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Contact Us
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Templates
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Import
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    API
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Consultants
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Partners
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    ClickUp University
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Events
                                </div>
                            </div>{" "}
                            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                                <div className="justify-center text-xs font-bold leading-5 tracking-normal text-white uppercase">
                                    Features
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Gantt Chart
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Dashboards
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    Native Time Tracking
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Mind Maps
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Automations
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Notepad
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Integrations
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    Email
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    To-Do List
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Kanban Board
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    Sprints
                                </div>
                            </div>{" "}
                            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                                <div className="justify-center text-xs font-bold leading-5 tracking-normal text-white uppercase">
                                    Compare
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white whitespace-nowrap">
                                    vs Monday
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    vs Asana
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    vs Jira
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white mt-9">
                                    vs Trello
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    vs Airtable
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    vs Notion
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    vs Basecamp
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white">
                                    vs Wrike
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    vs MS Project
                                </div>{" "}
                                <div className="justify-center mt-8 text-sm leading-5 text-white whitespace-nowrap">
                                    vs Todoist
                                </div>{" "}
                                <div className="justify-center text-sm leading-5 text-white whitespace-nowrap mt-9">
                                    vs Smartsheet
                                </div>
                            </div>{" "}
                            <div className="self-stretch flex grow basis-[0%] flex-col">
                                <div className="self-stretch justify-center text-xs font-bold leading-5 tracking-normal text-white uppercase">
                                    Blog
                                </div>{" "}
                                <div className="self-stretch justify-center mt-8 text-sm leading-5 text-white whitespace-nowrap">
                                    Software Team Hub
                                </div>{" "}
                                <div className="self-stretch justify-center text-sm leading-5 text-white mt-9">
                                    Agency Hub
                                </div>{" "}
                                <div className="self-stretch justify-center mt-8 text-sm leading-5 text-white whitespace-nowrap">
                                    PM Software Guide
                                </div>{" "}
                                <div className="self-stretch justify-center text-sm leading-5 text-white mt-9">
                                    Newsletter
                                </div>{" "}
                                <div className="self-stretch justify-center text-sm leading-5 text-white mt-9">
                                    Podcast
                                </div>{" "}
                                <div className="flex flex-col self-stretch h-px mt-32 bg-white bg-opacity-20 shrink-0 max-md:mt-10" />{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f021c0aaf4a5f641f01c1852b1e28972200dade190881f93c68a2b3a5aa6daf?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[2.98] object-contain object-center w-[140px] overflow-hidden mt-12 self-start max-md:mt-10"
                                />{" "}
                                <img
                                    alt=""
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a312d934b32322e2f33dc60b627acbb1603c01956510b7c6ef1ce7cf2e3e93c1?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                    className="aspect-[2.98] object-contain object-center w-[140px] overflow-hidden mt-2.5 self-start"
                                />
                            </div>
                        </div>{" "}
                        <div className="self-center flex w-[1220px] max-w-full items-stretch justify-between gap-5 mt-8 max-md:flex-wrap">
                            <div className="flex items-stretch justify-between gap-2">
                                <div className="flex grow basis-[0%] flex-col items-start">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8222db0af6265c4f4efab5e7010de59036ed5fb6f5534f641fac6a7eab2219f6?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                        className="aspect-[3.84] object-contain object-center w-[146px] overflow-hidden max-w-full"
                                    />{" "}
                                    <div className="flex items-center self-stretch justify-between gap-2 mt-2 max-md:justify-center">
                                        <div className="justify-center my-auto text-xs leading-5 text-white grow whitespace-nowrap">
                                            © 2023 ClickUp
                                        </div>{" "}
                                        <div className="justify-center text-white text-xs leading-5 whitespace-nowrap items-stretch self-stretch aspect-[3.1666666666666665] pl-2.5 pr-0.5 py-1 border-l-white border-l border-solid">
                                            Security
                                        </div>{" "}
                                        <div className="justify-center text-white text-xs leading-5 whitespace-nowrap items-stretch self-stretch grow pl-2.5 pr-0.5 py-1 border-l-white border-l border-solid">
                                            Your Privacy
                                        </div>
                                    </div>
                                </div>{" "}
                                <div className="justify-center text-white text-xs leading-5 whitespace-nowrap items-stretch aspect-[2.4444444444444446] mt-12 pl-2.5 pr-px py-1.5 border-l-white border-l border-solid self-end max-md:mt-10">
                                    Terms
                                </div>
                            </div>{" "}
                            <img
                                alt=""
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1534d317146546a143807ca5d99052be7182883215bf9cc5c17946b9a47c97a2?apiKey=ebc0f8a639494adab84738898fc3c240&"
                                className="aspect-[4.5] object-contain object-center w-36 justify-center items-start overflow-hidden self-center shrink-0 max-w-full my-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
