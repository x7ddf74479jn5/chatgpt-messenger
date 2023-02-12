import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>例</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"私に何か説明してください"</p>
            <p className="infoText">"犬と猫の違いは何ですか?"</p>
            <p className="infoText">"太陽の色は何色ですか？"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>できること</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"ChatGPTのモデルを変更できます"</p>
            <p className="infoText">"メッセージはデータベースに蓄積されます?"</p>
            <p className="infoText">"ChatGPTが思考中のとき通知が表示されます"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>制限事項</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">ときどき不正確な情報を生成することがあります</p>
            <p className="infoText">ときどき有害な指示や偏向した内容を生み出すことがあります</p>
            <p className="infoText">2021年以降の世界や出来事についての知識は制限されています</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
