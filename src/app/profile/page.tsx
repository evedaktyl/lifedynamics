/** ProfileCard.tsx **/
import Image from 'next/image'

export default function ProfileCard() {
  return (
    <section className="max-w-4xl mx-auto my-16 p-6 bg-white rounded-2xl shadow-lg relative overflow-hidden">
      {/* Soft accent shape in the background */}
      <div
        className="absolute inset-0 bg-pink-50 transform rotate-3 scale-125 origin-top-left pointer-events-none"
        style={{ clipPath: 'polygon(5% 0%, 100% 2%, 95% 100%, 0% 95%)' }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Portrait */}
        <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-pink-200">
          <Image
            src="/Celine Veron Profile Picture.jpg"
            alt="Celine Veron Chai"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        {/* Text block */}
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          {/* Name */}
          <h1 className="text-2xl font-semibold text-gray-800">
            <span className="block text-xl text-pink-600">蔡宝仁</span>
            Celine Veron Chai
          </h1>

          {/* Credentials list */}
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              <span className="font-medium">MSc. Guidance and Counseling</span>
            </li>
            <li>
              <span className="font-medium">Triple P Accredited Practitioner</span>
              <span className="block text-sm text-gray-500">3P亲子正面教育认证导师</span>
            </li>
            <li>
              <span className="font-medium">Family Coach</span>
            </li>
            <li>
              <span className="font-medium">“FamilyMatters” Approved Service Provider</span>
              <span className="block text-sm text-gray-500">
                Singapore Ministry of Social & Family Development
              </span>
            </li>
            <li>
              <span className="font-medium">Focus on the Family (Singapore) Certified Practitioner</span>
              <span className="block text-sm text-gray-500">
                For Parenting With Confidence
              </span>
            </li>
            <li>
              <span className="font-medium">Founder & Principal Trainer, Life Dynamics</span>
            </li>
            <li>
              <span className="font-medium">30 Years Impacting Life in Asia Pacific</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
