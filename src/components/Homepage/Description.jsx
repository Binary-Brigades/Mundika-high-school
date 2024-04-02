import React from "react";

function Description() {
  return (
    <div className="w-full py-6 bg-white md:gap-16 px-4 flex flex-col md:flex-row md:px-12 lg:px-20">
      <img
        src="https://s3-alpha-sig.figma.com/img/7dc8/52b1/f85f264e97f89442c3e29643c32bfad0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZHrNj0DUlFP-~wuaTCbuRq~30TwShH51CEZ6BHArthUYkxSQhs58NTLnU4skYsuhp4m4vThHfzv3aKZNIIIJAVoN85vIhXTgL0C-1mwVXFqHZoMBw8tWsyOVR0ck7O4UXY-n7S0URxp45xyPW9fgjKyhFU9MpIF8RYKXUpXKo2Rq1JcFSPygFbXRfwFfJRB3bl05RKw23jxQcBShI5njXxo3Ffr6SmjNuX9qFkkh0fi13rrVc8BJ131-1Ck~5NvG7abkaFS-81fdS0msmEq8lbTbWtxzhbp~3plGaB7WKP8CNATckL1eQvjSVDF6AVZQUHo1A1SLuY8PnKm-xHZHg__"
        alt="mundika school gate"
        className="w-full md:w-1/2 h-[300px] object-cover md:h-[400px]  rounded-lg"
      />
      <p className="text-center flex items-center text-lg">
        St Mary’s Mundika High School is a n Extra County Boys boarding School
        located in Matayos Sub-county, Busia County. The school has a population
        of 520 students, 30 qualified teachers and 20 support staff
      </p>
    </div>
  );
}

export default Description;
