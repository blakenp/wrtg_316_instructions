import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="div-container">
        <h1>How To Create a Bar Graph in Python</h1>
        <p>
          The ability to create graphs that communicate data is one of the most
          important tools for a data scientist to have.
          These instructions will walk you through the process, step by step,
          until you feel confident creating a simple bar graph in Python!
        </p>
        <h3>Materials:</h3>
        <ul>
          <li>Computer (Provided)</li>
          <li>Google Colab (Provided)</li>
          <li>A data set (Provided)</li>
          <li>Hands to type</li>
        </ul>
        <h2>Step 1: Create a Code Chunk</h2>
        <p>
          In Google Colab, click the +Code button in the top left corner to create a code chunk.
          Throughout these instructions, when asked to create
          a code chunk you will click this button.
        </p>
        <Image 
          src={"/add_code_button.png"}
          width={700}
          height={370}
          alt="Add Code Button"
          priority={true}
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: Another option for creating a code chunk is to use the keyboard shortcut Shift+Enter.
          This will run your code and create a new chunk automatically for you.
        </p>
        <h2>Step 2: Import Packages</h2>
        <p>
          In your newly created code chunk, 
          type the following commands to import the packages we"ll be using.
        </p>
        <p className="note">
          Note: In Python, a package is a useful collection of functions that 
          we are available to use in our programs. 
          We will import some packages to make our coding process easier.
        </p>
        <Image 
          src={"/required_packages.png"}
          width={700}
          height={60}
          alt="Required Python Packages"
          quality={100}
          priority={true}
          className="Image"
        />
        <p>
          Press the play button next to your chunk of code, 
          and watch as Colab executes your commands.
        </p>
        <p className="note">
          Note: If your code has run successfully, 
          a check mark will appear next to it. 
          If there are errors, check your code for typos, 
          or skip to the end to read the troubleshooting section.
        </p>
        <div className="hazard-container">
          <div className="hazard-title">    
            <FontAwesomeIcon icon={faExclamationTriangle} className="hazard-icon"/>
            <h3>
              Caution
            </h3>
          </div>
          <p>
            Throughout these instructions,
            <b> the code must be written exactly as shown</b>, 
            including punctuation, spacing, and indents. Otherwise, you will get 
            error messages and your code will not work.
          </p>
        </div>
        <h2>Step 3: Import Some Data</h2>
        <p>
          Add a new code chunk (using the +Code button or Shift+Enter). 
          Type the following to <b>import and name the data</b>, and click play to run the code.
        </p>
        <Image
          src={"/df_initialization.png"}
          width={700}
          height={40}
          alt="DF Initialization"
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: In Python, you can assign the data whatever name you'd like,
          but we are using hp_df to denote Harry Potter Data Frame.
        </p>
        <h2>Step 4: Check the Data</h2>
        <p>
          In a new code chunk, 
          <b> ensure that the data was imported correctly</b> using this command, and click play.
        </p>
        <Image
          src="/display_dataframe.png"
          width={700}
          height={37}
          alt="Display Dataframe"
          quality={100}
          className="Image"
        />
        <p>
          This table showing the first few rows of your data should appear:
        </p>
        <Image
          src={"/df_table.png"}
          width={700}
          height={160}
          alt="DF Table"
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: You might be confused as to why we used () in our code. 
          It may seem unnecessary, but whenever we enter a function, 
          Python needs parentheses to recognize it. 
        </p>
        <h2>Step 5: Calculate The Percentages</h2>
        <p>
          In a new code chunk, use these commands to <b>calculate the percentages</b> of
          how many people listed each character as their favorite. Click play.
        </p>
        <Image
          src={"/percentages_calc.png"}
          width={700}
          height={180}
          alt="Percentages Calc"
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: These lines of code first count how many people listed each 
          character as their favorite, and then convert these counts into percentages. 
          You may notice that the British spelling of the word favorite <b>("favourite")</b> is used. 
          This is because the dataset we imported is British, 
          and this code specifically refers Python to a part of that dataset.
        </p>
        <p>
          Python should return these data entries: 
        </p>
        <Image
          src={"/percentages_display.png"}
          width={700}
          height={250}
          alt="Percentages Display"
          quality={100}
          className="Image"
        />
        <h2>Step 6: Create the Bar Chart</h2>
        <p>
          In a new code chunk, type these lines of code to <b>create the desired bar chart</b>. Click play.
        </p>
        <Image
          src={"/plotting_logic.png"}
          width={700}
          height={75}
          alt="Plotting Logic"
          quality={100}
          className="Image"
        />
        <p>
          If you do this step correctly, you should get an image like this:
        </p>
        <Image
          src={"/plot_display1.png"}
          width={700}
          height={400}
          alt="Plot 1"
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: This code tells Python what kind of graph to make, and how big to make it. 
        </p>
        <h2>Step 7: Label Your Graph</h2>
        <p>
          In the <b>SAME</b> code chunk, add the following commands (highlighted in yellow)
          to <b>create labels on your graph</b>. Click play.
        </p>
        <Image
          src={"/plt_labeling.png"}
          width={700}
          height={280}
          alt="Plot 1"
          priority={true}
          quality={100}
          className="Image"
        />
        <p>
          You are all done! The final product should look something like this:
        </p>
        <Image
          src={"/plot_display2.png"}
          width={700}
          height={400}
          alt="Plot 2"
          quality={100}
          className="Image"
        />
        <p className="note">
          Note: You can choose whatever color you like for your graph! 
          Try typing the name of a different color in the color='' space (line 2 of the code).
          If you choose a color that Python doesn't recognize, 
          it will give you an error message when you click play. 
          You also may notice that we used the American spelling of favorite here. 
          We can make the titles whatever we want, and we're assuming we have an American audience.
        </p>
        <h1>Troubleshooting</h1>
        <h3>
          If you get an error message, don't panic. 
          Check to make sure you typed every line of code exactly as instructed. Additionally:
        </h3>
        <ul>
          <li>
            One common error that causes Python code not to run is incorrect indentation. 
            Make sure if you have a for loop 
            (a function that uses the word for to tell Python to execute a command repeatedly) 
            that the following line is indented with tab once. An example is below:
          </li>
          <Image
            src={"/for_loop_example.png"}
            width={300}
            height={70}
            alt="For Loop Example"
            quality={100}
            className="Image"
          />
          <li>
            Forgetting to place a colon at the end of a for loop will also cause
            Python to throw errors. Again, refer to the for loop above.
          </li>
          <li>
            The cells containing code must be run sequentially or certain cells 
            that depend on the previous cells will not execute the code.
          </li>
        </ul>
        <h1>Conclusion</h1>
        <p>
          After you have written and run the last chunk of code, 
          make sure that there are no errors and that you get the desired results. 
          You should see a horizontal bar graph comparing favorite Harry Potter characters.
        </p>
        <p>
          Your program is now finished, and you are ready to create bar graphs in Python!
        </p>
      </div>
    </main>
  );
}
