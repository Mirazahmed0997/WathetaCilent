import useTaramsData from "@/utility/useTaramsData";
import React from "react";

const TramsPages = async () => {
  const tramsData = await useTaramsData();
  console.log(tramsData);
  return (
    <div className="mx-5 lg:mx-48 xl:mx-48 py-20 lg:py-24 xl:py-24">
      <div className="">
        <div className="flex flex-col xl:flex-row lg:flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">Trams & Condition</h1>
          <p>Last updated: January 3, 2025</p>
        </div>
        {tramsData?.map((tram, index) => (
          <div
            dangerouslySetInnerHTML={{ __html: tram?.text }}
            className="prose max-w-none pt-5"
            key={index}
          ></div>
        ))}
        {/* <div className="mt-4 opacity-80 text-md lg:text-lg xl:text-lg space-y-3">
          <p className="text-justify leading-loose">
            {" "}
            WaTheta is the Signature Product of AdTheta{" "}
          </p>
          <p className="text-justify leading-loose">
            Trade Licence Number (Bangladesh Government):{" "}
            <span className="text-black font-semibold">
              TRAD/DNCC/145380/2022
            </span>
          </p>
          <p className="text-justify leading-loose">
            VAT Registration Certificate (Bangladesh Government):{" "}
            <span className="text-black font-semibold">
              BIN: 005690707-0401
            </span>
          </p>
          <p className="text-justify leading-loose">
            Certificate of Incorporation (England & Wales):{" "}
            <span className="text-black font-semibold">
              Company Number: 15263726
            </span>
          </p>
          <p className="text-justify leading-loose">
            Bangladesh Register Address: House- 13, 2nd Floor, Road- 01 Sector-
            01, Block- k, Aftabnagar, Dhaka- 1214
          </p>
          <p className="text-justify leading-loose">
            United Kingdom Register Address: 71-75 Shelton Street, Covent Garden
            London, WC2H 9JQ, UK
          </p>
          <p className="text-justify leading-loose">
            The following terms and conditions govern all use of the WaTheta
            website and all content, services, and products available at or
            through the website (our Services). Our Services are offered subject
            to your acceptance without modification of all of the terms and
            conditions contained herein and all other operating rules, policies
            and procedures that may be published from time to time by WaTheta
            (collectively, the “Agreement”). You agree that we may automatically
            upgrade our Services, and these terms will apply to any upgrades.
          </p>
          <p className="text-justify leading-loose">
            Please read this Agreement carefully before accessing or using our
            Services. By accessing or using any part of our services, you agree
            to become bound by the terms and conditions of this agreement. If
            you do not agree to all the terms and conditions of this agreement,
            then you may not access or use any of our services. If these terms
            and conditions are considered an offer by WaTheta, acceptance is
            expressly limited to these terms.
          </p>
          <p className="text-justify leading-loose">
            Our Services are not directed to children younger than 18, and
            access and use of our Services is only offered to users 18 years of
            age or older. If you are under 18 years old, please do not register
            to use our Services. Any person who registers as a user or provides
            their personal information to our Services represents that they are
            18 years of age or older.
          </p>
          <p className="text-justify leading-loose">
            Use of our Services requires a WaTheta account. You agree to provide
            us with complete and accurate information when you register for an
            account. You will be solely responsible and liable for any activity
            that occurs under your username. You are responsible for keeping
            your password secure.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            1. The Service
          </p>
          <p className="text-justify leading-loose">
            The “Service” includes a. the site b. the on demand application
            related to your account c. your account specific support portal and
            chat widget d. WaTheta API to integrate with third party
            applications e. related content for the plan purchased, including
            all software data, sounds, images, PDFs, videos, and any other
            content made available to the end by WaTheta. Any new features added
            to or augmenting the Service are also subject to the Terms and
            conditions (hereinafter also referred to as: “the Terms”).
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            2. Acceptance of Terms
          </p>
          <p className="text-justify leading-loose">
            2.1 WaTheta provides its service to you through its website,
            www.watheta.com, and individual WaTheta accounts created for you,
            the customer, as outlined above.
          </p>
          <p className="text-justify leading-loose">
            2.2 By accepting these Terms or accessing WaTheta provided URLs, you
            acknowledge that you have read, understood and agreed to be bound by
            the following terms, and that representations made by you on WaTheta
            are accurate, complete and within your rights to make. If you are
            entering into these Terms on behalf of an employer or third party,
            you represent that you have authority to bind that entity to these
            Terms. If you do not have such authority or do not agree to the
            Terms, you are not allowed to use the WaTheta service.
          </p>
          <p className="text-justify leading-loose">
            2.3 You acknowledge that these Terms constitute an agreement between
            WaTheta and yourself and that your electronic signup acts as a
            legally binding agreement.
          </p>

          <p className="text-justify leading-loose font-semibold text-black">
            3. Terms of Use
          </p>
          <p className="text-justify leading-loose">
            3.1 WaTheta reserves the right to terminate or modify the service at
            any time, without prior notification.
          </p>
          <p className="text-justify leading-loose">
            3.2 The Service is provided on an “as is” and “as available” basis
            without any warranty or condition, either express, implied or
            statutory.
          </p>
          <p className="text-justify leading-loose">
            3.3 WaTheta makes no claims that the service will be uninterrupted
            or error-free and customers use the application at their own risk.
            However, if the application will be unavailable due to planned
            maintenance we will endeavour to notify all users at least 7 days in
            advance.
          </p>
          <p className="text-justify leading-loose">
            3.4 You agree, as a customer, not to license, resell, lease,
            transfer or distribute the service to any third party.
          </p>

          <p className=" leading-loose font-semibold text-black">
            Your WaTheta Account
          </p>
          <p className="text-justify leading-loose">
            If you create an account on WaTheta, you are responsible for
            maintaining the security of your account, and you are fully
            responsible for all activities that occur under the account and any
            other actions taken in connection with the account. You must
            immediately notify WaTheta of any unauthorized uses of your account,
            or any other breaches of security. WaTheta will not be liable for
            any acts or omissions by you, including any damages of any kind
            incurred as a result of such acts or omissions.
          </p>

          <p className=" leading-loose font-semibold text-black">
            Responsibility of Accounts
          </p>
          <p className="text-justify leading-loose">
            You are entirely responsible for the content of, and any harm
            resulting from, that Content or your conduct. That is the case
            regardless of what form the Content takes, which includes, but is
            not limited to text, photo, video, audio, or code. By using WaTheta,
            you represent and warrant that your Content and conduct do not
            violate these terms. Without limiting any of those representations
            or warranties, WaTheta has the right (though not the obligation) to,
            in WaTheta sole discretion, (i) reclaim your account due to
            prolonged inactivity, (ii) refuse or remove any content that, in
            WaTheta reasonable opinion, violates any policy or is in any way
            harmful or objectionable, or (iii) terminate or deny access to and
            use of WaTheta to any individual or entity for any reason. WaTheta
            will have no obligation to provide a refund of any amounts
            previously paid.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            Payment and Renewal
          </p>
          <p className="text-justify leading-loose">
            You agree to pay WaTheta the monthly subscription fees indicated for
            that service. Payments will be charged on a pre-pay basis and will
            cover the use of that service for the next following subscription
            period as indicated.
            <br />
            Unless you notify WaTheta before the end of the applicable
            subscription period that you want to cancel your account, your
            subscription will automatically renew and you authorize us to
            collect the then-applicable monthly subscription fee (as well as any
            taxes) using any credit card or other payment mechanism we have on
            record for you. Your account can be canceled at any time by
            accessing your account details sent via email or by sending an email
            to us.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            Responsibility of Visitors
          </p>
          <p className="text-justify leading-loose">
            WaTheta has not reviewed, and cannot review, all of the material,
            including computer software, posted to our Services, and cannot
            therefore be responsible for that material’s content, use or
            effects. By operating our Services, WaTheta does not represent or
            imply that it endorses the material there posted, or that it
            believes such material to be accurate, useful, or non-harmful. You
            are responsible for taking precautions as necessary to protect
            yourself and your computer systems from viruses, worms, Trojan
            horses, and other harmful or destructive content. Our Services may
            contain content that is offensive, indecent, or otherwise
            objectionable, as well as content containing technical inaccuracies,
            typographical mistakes, and other errors. WaTheta disclaims any
            responsibility for any harm resulting from the use by users and
            visitors of our Services, or from any downloading by those visitors
            of content.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            WhatsApp Business API
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            WaTheta openly declares that is not owned or operated in any manner
            by WhatsApp Inc. WaTheta Enables A User To Use Official WhatsApp
            Business API and Make Bots and Automation With the same.
          </p>

          <p className="text-justify leading-loose font-semibold text-black">
            Changes
          </p>
          <p className="text-justify leading-loose">
            We are constantly updating our Services, and that means sometimes we
            have to change the legal terms under which our Services are offered.
            If you disagree with our changes, then you should stop using our
            Services within the designated notice period. Your continued use of
            our Services will be subject to the new terms. However, any dispute
            that arose before the changes shall be governed by this Terms
            (including the binding individual arbitration clause).
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            Termination
          </p>
          <p className="text-justify leading-loose">
            WaTheta may terminate your access to all or any part of our Services
            at any time, with or without cause, with or without notice,
            effective immediately. If you wish to terminate this Agreement or
            your WaTheta account (if you have one), you may simply discontinue
            using our Services. All provisions of this Agreement which by their
            nature should survive termination shall survive termination,
            including, without limitation, ownership provisions, warranty
            disclaimers, indemnity and limitations of liability.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            Disclaimer of Warranties
          </p>
          <p className="text-justify leading-loose">
            Our Services are provided “as is” WaTheta and its suppliers and
            licensors hereby disclaim all warranties of any kind, express or
            implied, including, without limitation, the warranties of
            merchantability, fitness for a particular purpose and
            non-infringement. Neither WaTheta nor its suppliers and licensors,
            makes any warranty that our Services will be error free or that
            access thereto will be continuous or uninterrupted. If you’re
            actually reading this, here’s a treat. You understand that you use
            our Services at your own discretion and risk.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            Limitation of Liability
          </p>
          <p className="text-justify leading-loose">
            In no event will WaTheta, or its suppliers or licensors, be liable
            with respect to any subject matter of this Agreement under any
            contract, negligence, strict liability or other legal or equitable
            theory for: (i) any special, incidental or consequential damages;
            (ii) the cost of procurement for substitute products or services;
            (iii) for interruption of use or loss or corruption of data; or (iv)
            for any amounts that exceed the fees paid by you to WaTheta under
            this agreement during the twelve (12) month period prior to the
            cause of action. WaTheta shall have no liability for any failure or
            delay due to matters beyond their reasonable control. The foregoing
            shall not apply to the extent prohibited by applicable law.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            General Representation and Warranty
          </p>
          <p className="text-justify leading-loose">
            You represent and warrant that (i) your use of our Services will be
            in strict accordance with the WaTheta Privacy Policy, with this
            Agreement, and with all applicable laws and regulations (including
            without limitation any local laws or regulations in your country,
            state, city, or other governmental area, regarding online conduct
            and acceptable content, and including all applicable laws regarding
            the transmission of technical data exported from the country in
            which you reside) and (ii) your use of our Services will not
            infringe or misappropriate the intellectual property rights of any
            third party.
          </p>
          <p className="text-justify leading-loose font-semibold text-black">
            Indemnification
          </p>
          <p className="text-justify leading-loose">
            You agree to indemnify and hold harmless WaTheta, its contractors,
            and its licensors, and their respective directors, officers,
            employees, and agents from and against any and all claims and
            expenses, including attorneys fees, arising out of your use of our
            Services, including but not limited to your violation of this
            Agreement.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TramsPages;
