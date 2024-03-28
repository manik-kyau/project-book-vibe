/* eslint-disable no-mixed-spaces-and-tabs */

const Faq = () => {
    return (
        <div className="bg-gray-100 rounded-3xl py-6 my-6 lg:my-12">
            <section className="dark:bg-gray-100 dark:text-gray-800">
            	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            		<h2 className="text-3xl lg:text-4xl font-bold  text-[#131313] mb-3 playfair">Frequently Asked Questions</h2>
            		<p className="mt-4 mb-8 dark:text-gray-600 text-lg font-medium">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
            		<div className="space-y-4">
            			<details className="w-full border rounded-lg">
            				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 text-lg font-semibold WorkSans">What is the book vibe about?</summary>
            				<p className="px-4 py-6 text-base font-normal WorkSans pt-0 ml-4 -mt-4 dark:text-gray-600">"Vibe is a lesson on emotions, hip-hop, the Black South, and storytelling. A must-read." "Vibe is an important exploration of the aesthetics of Black life and hip-hop in the rural American South." </p>
            			</details>
            			<details className="w-full border rounded-lg">
            				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600  text-lg font-semibold WorkSans">What is bad vibes only about?</summary>
            				<p className="px-4 py-6 pt-0 ml-4 text-base font-normal WorkSans -mt-4 dark:text-gray-600">Socrates claimed that the unexamined life is not worth living. Bad Vibes Only is for people who have taken that dictum a bit too far—the overthinkers, the analyzers, the recovering Girl Bosses, and the burned-out personal brand—reminding us that a life worth living is about more than just “good vibes.” </p>
            			</details>
            			<details className="w-full border rounded-lg" open="">
            				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600  text-lg font-semibold WorkSans">What book should I read to be happy?</summary>
            				<p className="px-4 py-6 pt-0 ml-4 text-base font-normal WorkSans -mt-4 dark:text-gray-600">Many people argue that The Art of Happiness: A Handbook for Living (Dalai Lama XIV and Howard Cutler, 1998) is the best book to read if you want to become happier. This book includes in-depth interviews with the Nobel Prize winning Dalai Lama XIV, the spiritual and temporal leader of Tibet.</p>
            			</details>
            		</div>
            	</div>
            </section>
        </div>
    );
};

export default Faq;