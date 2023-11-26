import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction';
import ProjectsGroup from './components/ProjectsGroup';

function App() {

    const softwareEngineeringProjects = {
        'Investment Intel': {
            title: 'Investment Intel - Website and Software for Investment Information with Django and React',
            date: 'Jun 2023 - Aug 2023',
            text: `
                This software is the MVP of a investment information provider for brazilian financial markets.
                The MVP contains registration and performance data of brazilians hedge funds and enables the user to
                analyze and compare the performance of any of the brazilian hedge funds registered in the CVM
                (brazilian agency responsible for hedge funds).
            `,
            links: {
                'Code in Django and React': 'https://github.com/Fernando-Urbano/investment-intel',
                'Complete Explanation': 'https://github.com/Fernando-Urbano/investment-intel/blob/main/README.md'
            },
            video: 'r1-xU-xvvKA'
        },
        'Trading Strategy Development and Deployment' : {
            title: 'Trading Strategy Development and Deployment with Python',
            date: 'Nov 2023 - Dec 2023',
            text: `
                This project aims to create a trading strategy and trade paper money with it using the Alpaca API. If wanted, the strategy can also be used to trade dollars.

                The trading strategy market chosen was the crypto market and the benchmark of the strategy is the Bitcoin. It's goal is to overperform Bitcoin.

                
                The strategy uses three crypto currencies:

                - Ethereum (ETH/USD)

                - Uniswap (UNI/USD)

                - Bitcoin (BTC/USD)

                
                The strategy aims to trade every hour and uses hourly data from the three crypto currencies to generate predictions about the returns of the three crypto assets.

                
                The model chosen to generate predictions about the three crypto assets is the VAR (Vector Autoregressive) model. In the model, we predict:

                
                - returns of the three crypto currencies

                - average price for a given amount of hours divided by the rolling average price for another given amount of hours

                
                The VAR model predicts values for all those, using all the variables to predict each one. Afterwards, only the prediction of the hourly returns (not the average) are used.
                

                The expected return according to the model for BTC, ETH and UNI are than used with the covariance matrix of returns to the "portfolio management" part of the strategy, which defines optimal weights for each of the assets for the next hour. The weights of each asset are defined using mean-variance (Efficient Frontier) optimization with RIDGE. RIDGE makes the weights less disperse. If any weight is negative, it becomes zero. Afterwards, the weights are scaled to add up to 100% of the total equity available.
                

                Finally, the "portfolio managament" send the target weights to the "operation" side of the strategy with calculates how much of each of the three assets should be sold/bought.
            `,
            links: {
                'Code in Python': 'https://github.com/Fernando-Urbano/alpaca-trading-strategy-p3'
            }
        },
        'Social Network Project': {
            title: 'Social Network Project with Django and JS',
            date: 'May 2023 - Jun 2023',
            text: `
                The project attempts to create a simple social network similar to Twitter. It allows the users to follow
                and like each other, post and edit posts.
            `,
            links: {
                'Code in Django and JS': 'https://github.com/Fernando-Urbano/social-network',
                'Complete Explanation': 'https://github.com/Fernando-Urbano/social-network/blob/main/README.md'
            },
            video: 'mrBkMG5RAos'
        },
        'Macro Software': {
            title: 'Macroeconomics Forecast, Data Engineering and Visualization Project',
            date: 'Dec 2021 - May 2022',
            text: `
                During my time in the Macroeconomics and Strategic Research sector at Inter, I led the construction
                of an automated system to collect data, generate graphics and update forecasts of local activity and
                employment indexes. The project (i) reduced by +10% the average MSE of our forecasts, (ii) allowed
                us to produce forecasts regarding more indexes and subindexes which had utility to specific sectors
                of the bank like credit concession, data governance, and commercial sectors, (iii) extinguished the
                time spent working on graphics and data collection, which accounted for ~5 hours weekly of 12
                analysts (valued at ~R$ 17 thousand/monthly increase in productivity), (iv) made reports about
                different scenarios to the treasury bank (with R$ 15.5 billion AUM), helping in the decision-making
                process.\n

                During my internship at the bank, I perceived that our forecasts lacked a better understanding of
                confidence intervals, probability of being above/below a certain threshold, and alternative scenarios,
                our analyses were often everlastingly, and we did not produce automated reports. Three months
                before graduation, I was promoted to analyst and formally started leading the interns of the
                macroeconomics and equity research sectors. With more “human capital”, Rafaela let me lead this
                project.\n
                
                Before the start, I defined with the interns the basic coding and git rules, necessary comments on
                each script, and meeting frequency to discuss necessary changes. Finally, I divided the project into
                9 parts:\n

                1) We worked on data collection using APIs of central banks (FRED, BCB), geopolitical
                institutes (IBGE, IPEA), and market websites (Yahoo, Investing), etc. The time-series
                collected were added to SQL. Then, we created R routines to address updates of those time-
                series every day.\n

                2) We built a user friend R package with a function to search by name, id, and related words,
                and access the series.\n

                3) We added graphic functions to our R package, which were used to adjust visual aspects of
                the graphics, save the graphics using different timeframes, and create logs to facilitate later
                searches.\n

                4) The sector interns created scripts to generate “ggplot” plots, mixing variables, adjusting
                layouts to specific fonts. More than 1,000 graphics were saved and daily updated in six
                different sizes in multiple folders. I was responsible for correcting the intern’s code and
                adjusting previous mistakes.\n

                5) I organized with our chief economist what to predict: subindexes from Brazilian commercial,
                services, industrial, formal employment, general employment, and credit concession sectors.
                Each of the previous had 8 to 24 subindexes responsible for formatting the larger index. All
                the subindexes were predicted one-step forward and summarized in larger indexes. The
                process was repeated multiple times to generate medium-term forecasts.\n

                6) I created a R front-end to add the possible features for each target variable and their
                differentiations looking at stationarity, correlation, and checking if polynomial regression could
                improve the result.\n

                7) I constructed the rules to test and implement models. Each subindex was tested with (i) all
                possible features selected, (ii) using stepwise selection. The training sets were used (i) from
                the beginning of the series, and (ii) from the time of an identified structural break in the series.
                The algorithms used were (i) multiple regression, (ii) SARIMAX, (iii) random forest, (v)
                XGBoost, (vi) regularized regression. Later, the models were tested using time-series cross-
                validation. Finally, the winner model (including algorithms, training sets and features) for each
                subindex was decided based on the MSE of the larger index (weighted sum of the subindex).
                While those variables were predicted by the software, exchange rate (USDBRL),
                commodities (CRB), and basic interest rate of Brazil and USA were exogenous variables
                given to the model with some steps ahead already.\n

                8) Using R, we constructed unitests, exceptions to deal with unexpected results without the
                need to stop the process, reports to show the selected models and relationship target-feature
                using SHAP, and warnings when the forecasts seemed like outliers.\n

                9) Finally, we built a front-end using Python and Django to show results.\n

                The project was important to me because: (i) it was an opportunity for me to lead and teach, dealing
                with aspects of coding with more people, (ii) required great advancement of my skills in software
                architecture and error-handling, (iii) made me absorb the relationships between the indexes and
                their features and best ML approaches for each forecast.\n

                With my current knowledge, I would do the prediction part of the project in Python instead of R due
                to its OOP construction and use Django as a front-end since the project began. Furthermore, I would
                apply a Bayesian approach due to the small number of observations and try to define the best model
                to predict each subindex in a “handmade” way outside of the software.\n

                Finally, I can assure I am really proud of the project. Eight months ago, I left the macroeconomic
                sector and still today the graphics and databases are updated daily and the forecasts are used to
                construct baselines and alternative scenarios.
            `
        },
        'Mail Service': {
            title: 'Mail Service Project with Django and JS',
            date: 'Apr 2023 - May 2023',
            text: `
                The project attempts to create a mail service where users can send, reply, arquive e-mails as well as mark
                them as read/unread.
            `,
            links: {
                'Code in Django and JS': 'https://github.com/Fernando-Urbano/mail-service',
                'Complete Explanation': 'https://github.com/Fernando-Urbano/mail-service/blob/main/README.md'
            },
            video: 'bavRAFoinm4'
        },
        'E-Commerce': {
            title: 'E-Commerce Project with Django and JS',
            date: 'Mar 2023 - May 2023',
            text: `
                The project attempts to create a e-commerce where users can create listings, bid on other users listings,
                comment on those listings and define when a user wins one of their bids. Users also can view how are the listings
                in which thet bet are evolving and which ones they are winning or already won.
            `,
            links: {
                'Code in Django and JS': 'https://github.com/Fernando-Urbano/e-commerce',
                'Complete Explanation': 'https://github.com/Fernando-Urbano/e-commerce/blob/main/README.md'
            },
            video: 'FqzSTWCXzH0'
        },
        'Wikipedia': {
            title: 'Wikipedia Software Project with Django',
            date: 'Mar 2023 - Apr 2023',
            text: `
                The project attempts to replicate wikipedia and allows users to add and edit pages, search for specific content, and
                visualize.
            `,
            links: {
                'Code in Django': 'https://github.com/Fernando-Urbano/wikipedia-software',
                'Complete Explanation': 'https://github.com/Fernando-Urbano/wikipedia-software/blob/main/README.md'
            },
            video: 'wkML34wZBQU'
        }
    }
    
    const dataScienceProjects = {
      'Forest Through the Trees': {
          title: 'Replication of "Forest Through the Trees: Building Cross-Sections of Stock Returns Replication"',
          date: 'Jan 2023 - Apr 2023',
          text: `
              This is replication is made to reinforce my interest in factor investing. The replication aims to create test
              assets using AP-Tree and compare the results of the test assets generated with the unconditional sorting. To
              compare the results, the test assets for both methods are used in a cross-section of returns to verify a capacity
              of a factor model to capture systematic risk and used to produce an out-of-sample Sharpe ratio, in order to attest
              the capacity to span the SDF. The test assets used are a crucial aspect when evaluating if a factor model captures
              all systematic risk and should be able to correctly span the SDF by representing all economic risk, and, therefore,
              have the highest out-of-sample Sharpe when combined efficiently.\n

              The results found in the original paper show that AP-Tree test assets considerably outperform unconditional sorting
              test assets in its capacity to span the SDF, due to its higher Sharpe ratio, and often lead to bigger and more
              significantly different from zero alpha in the cross-sections of returns, disproving the capacity of some factor
              models to price all systematic risk. The results found in this replication agree with results found on the original
              paper, but do not lead to an outperformance of the AP-Tree when compared to unconditional sorting test assets as big
              as the one found in the original work.
              `,
          links: {
              'Code in Python': 'https://github.com/Fernando-Urbano/forest-through-the-trees',
              'Complete Explanation': 'https://github.com/Fernando-Urbano/forest-through-the-trees/blob/main/README.md'
          }
      },
      'Inter': {
          title: 'Macroeconomics and Strategic Research Reports',
          date: 'Oct 2020 - May 2022',
          text: `
              During my time in Bank Inter (NASDAQ: INTR), we routenily produced reports about brazilian macroeconomic 
              scenario and investment strategy.\n
  
              Still today, most of the graphics used in the reports are constructed used and R scripts built by me and
              the interns who I led. We used ggplot2 and built our own theme in accordance with the banks colors.
          `,
          links: {
              'My Analysis of Core Brazilian CPI Feb22 (in PT)': 'https://drive.google.com/file/d/1mpu6JxdefYyxPox6VLlrnWP_1da7YyPZ/view?usp=sharing',
              'My Analysis on Brazilian Employment Dec22 (in PT)': 'https://drive.google.com/file/d/11U7-ZmW4esG5J1I2tjUds_mKx0xYieEo/view?usp=sharing',
              'Our Investment Advice (in PT)': 'https://drive.google.com/file/d/1e9qwBoaWXW0ZdMTD25iO8ePgj8bBs5LY/view?usp=sharing',
              'New Research Reports (in PT)': 'https://interinvest.bancointer.com.br/analise'
          }
      },
      'FF5F': {
            title: 'Efficient Frontier with Fama French Five Factor using Dynamic Betas',
            date: 'Aug 2020 - July 2021',
            text: `
                We propose a calculation of weights for the point of minimun variance for the
                Efficient Frontier using only the part of returns which can be explained by the
                Fama French Five Factor Model to calculate the matrix of var-cov. The proposal
                aims to understand if, by looking only at the part of returns which can be explained
                by the efficient market hypothesis according to the new FF5F, we can extract the part
                of variance and covariance between assets that is important to obtain a better portfolio
                for future performance in comparison with the portfolio that looks at the matrix of
                var-cov generated by the occurred returns.\n

                The returns explained by FF5F are calculated using dynamic betas with Dynamic Conditional
                Correlation with GARCH and APARCH volatility models and generate the matrix of var-cov
                from which we calculate the weights to generate the point of minimun variance. The same
                procedure is done to calculate the weights of minimun variance without previous adjustment
                of returns (conventional way). The adjusted and not adjusted portfolios of minimun weight
                are tested in the out-of-sample. The empirical result with weights derived from FF5F
                returns perform better for short periods of time, but lose Sharpe ratio performance over
                long periods when compared to the traditional methodoly.\n
            `,
            links: {
                'Paper in SSRN': 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4269284',
                'Code in R': 'https://github.com/Fernando-Urbano/bachelor-thesis'
            }
        },
        'RIDGE': {
            title: 'RIDGE for Efficient Frontier',
            date: 'Nov 2020 - Feb 2021',
            text: `
                In RIDGE for efficient frontier, steady of having the betas in the penalizer function,
                it is presented having the sum of squares of the weights. Therefore, when trying to minimize
                the variance of a portfolio by choosing the weights, we do not only consider the variance but
                also the penalizer.\n

                Considering that the sum of weights must always be equal to 1, the closer the weights are to the
                average of weights, the smaller the penalizer will be.\n

                Click in the link to view a full explanation and my implementation in R.
            `,
            links: {
                'Code in R': 'https://github.com/Fernando-Urbano/ridge-portfolio-optimization',
                'Complete Explanation': 'https://github.com/Fernando-Urbano/ridge-portfolio-optimization/blob/main/README.md',
            }
        },
        'Clustering': {
            title: 'Clients Clustering with K-Means and TSNE',
            date: 'Jul 2022 - Oct 2022',
            text: `
                During my time in Inter’s Data Science department, I became responsible for the area of predicting
                the client’s income at the account opening moment. While other banks require clients to provide
                proof of income, Inter has taken a more democratic path by simplifying the account opening process,
                however, it led to less information to assure good credit concession.\n

                Therefore, we started the project looking for good samples with reliable target variables but could
                not find them. At that point, we hit a roadblock, but, after some study, I decided for an unsupervised
                approach using Python and SQL and divided the project into three major steps:\n
                
                1) Experiment construction: contrary to supervised learning, features have arbitrary importance
                and must be selected carefully. After routinely examining the business side opinions, I
                decided to construct an experiment; use of 5 variables from the central bank bureau, censitary
                sector income, and dummies regarding partnership in companies and recipiency of
                government financial aid. The sample accounted for 1,8 million clients that would be
                clusterized and validated six months after in amount of investment, amount transacted,
                percentage of clients who joined the private category. Those later variables could not be used
                as features because they would not be available for future clients at the moment of account
                opening.\n
                
                2) Model adjustments: to assure better statistical results we used (i) PCA to reduce
                dimensionality, (ii) elbow method to find optimal number of clusters, (iii) TSNE to visualize if
                clusters were well separated, (iv) silhouette to assure that the distance between clusters was
                reasonable in every observation. The final result was not using PCA and remaining with 12
                clusters which led to reasonable silhouette score, good separation in TSNE, result close to
                the elbow optimum, and extraordinary separation of validation variables.\n
                
                3) Result analysis: we created personas to represent each cluster and separated them into low,
                medium, or high income. To assure a good understanding of the project for the business
                sector we used Chernoff Faces, radar graphics, and other visualizations.\n
                
                The project was important to me because it made me think about: (i) alternative methods when
                supervised learning was not possible, and (ii) the importance of the proximity with the business
                sector to derive features that make sense in pursuit of a goal.\n

                With my current knowledge, I would focus more time on the construction of the experiment. Data
                Scientists often focus largely on the algorithms while their experiments/databases are poorly
                constructed, which leads to biased results. The same is valid for market predictions, especially with
                the “look-ahead bias”.\n
                
                Finally, the project is expected to generate R$ 3 billion/year in additional AUC and R$ 2.5
                million/year in additional revenue to the commercial sector which is using the results as leads. The
                credit sector has not yet implemented the solution, but a similar result is expected to the area.
            `
        },
    }

    const awardsAndCourses = {
        'CFA': {
            title: 'CFA Level 1',
            date: 'Nov 2021',
            text: `
                Passed the CFA Level 1 exam among the top 10%.
            `,
            links: {
                'Results': 'https://drive.google.com/file/d/1plJpezswC_ZROPzEox5F97c-1lirOeUK/view?usp=sharing',
                'Badge': 'https://basno.com/8fnzf8hd'
            }
        },
        'Ibmec': {
            title: 'Summa cum Laude',
            date: 'Jul 2021',
            text: `
                Graduated Summa cum Laude: price given to the best student in the Economics cohort of Ibmec. Furthermore, I also received
                awards as the best student of the cohort in university period in every occasion the award was given.
            `,
            links: {
                'Awards': 'https://drive.google.com/file/d/1nes8jk_1tfv412eTlMrOcCXz-GCgxaBK/view',
            }
        },
        'Academic Awards': {
            title: 'Academic Awards',
            date: 'Sep 2019',
            text: `
                Won academic award and a trip to Portugal as the best student in the university of
                humanities courses.\n

                The trip included visits to Porto, Aveiro and Coimbra, where we watched lectures on business development and law.
                To conclude the trip, we wrote a book with tips and advice to brazilian enterpreeur aiming to start
                a business in Portugal talking about differences in legislation, culture, social aspects, and economics.
            `,
            links: {
                'Award': 'https://drive.google.com/file/d/1JrV6Gdq5gtwUQXhb4mpYwmjjxU22ui8b/view?usp=sharing',
            },
            video: 'M80El-vT2s4'
        },
        'CISV': {
            title: 'Volunteer Work: CISV',
            date: 'Jan 2011 - Dec 2017',
            text: `
                CISV was founded in the belief that peace is possible through building friendship and mutual understanding, starting
                with children.\n

                During my time in the organization, I participated and traveled once per semester to camps in order to discuss and implement
                global citizenship with young people from around the world. In 2016, I organized and developed activities for children and young
                teenagers. Between january and december of 2017, I led the local chapter of juniors in the organization.\n

                The video shows one of the camps in which I participated as a child in Finland, 2015.
            `,
            links: {
                'Transcript of Participation': 'https://drive.google.com/file/d/16xHHKKPanfG1P9sBMc_GEEuQ2LVruWSW/view?usp=sharing',
            },
            video: 'tKEHhFPpkFg'
        },
        'CS50W': {
            title: 'Harvard CS50’s Web Programming with Python and JavaScript',
            date: 'Dec 2022 - Aug 2023',
            text: `
                This course dives deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like
                Django, React, and Bootstrap. 

                I completed every assignment and the final project, but unfortunately could not pay for the certificate.
            `,
            links: {'Studies': 'https://github.com/Fernando-Urbano/cs50w'}
        },
        'ML Deeplearning.ai': {
            title: 'Stanford Deeplearning.ai Machine Learning Specialization',
            date: 'May 2022 - Nov 2022',
            text: `
                This specialization teachs about Gradient Descent and its application for Regression and Classification, tree based algorithms, like Decision and
                Regression Tree, Random Forest and GX-Boost, Neural Networks, cross-validation, and the Bias-Variance tradeoff.\n

                I am currently finalizing the third part of the specialization.
            `,
            links: {
                'Studies': 'https://github.com/Fernando-Urbano/machine-learning-studies',
                'Certificate': 'https://drive.google.com/file/d/1Vhl0z2yZ0x40K__K_Xi0v_SB1TWTcxl-/view'
            }
        },
        'CEA': {
            title: 'CEA',
            date: 'Nov 2019',
            text: `
                Approved at the certificate of specialist in investment according to Anbima, the regulatory
                agency of financial markets in Brazil
            `,
            links: {'Certificate': 'https://drive.google.com/file/d/1azD0OKqksCZn35pE-ZNuZWgVGQdMzy0i/view'}
        }
    }

    return (
        <div className="App">
            <Introduction />
            <ProjectsGroup name='Software Engineering Projects' projects={softwareEngineeringProjects}/>
            <ProjectsGroup name='Data Science and Finance Projects' projects={dataScienceProjects}/>
            <ProjectsGroup name='Awards, Courses and Volunteering' projects={awardsAndCourses}/>
        </div>
    );

}

export default App;
