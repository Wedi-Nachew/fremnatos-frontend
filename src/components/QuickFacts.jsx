import CountUpModule from "react-countup";

const CountUp = CountUpModule?.defualt ?? CountUpModule;

const QuickFacts = () => {
    const facts = [
        { number: 30, label: "Years of Service", postfix: "+" },
        { number: 200, label: "Children", postfix: "+" },
        { number: 150, label: "Elderly", postfix: "+" },
        { number: 200, label: "Mentally Disabled", postfix: "+" },
        { number: 550, label: "Total Lives Impacted", postfix: "+" },
    ];

    return (
        <div className="flex flex-col gap-8 md:flex-row w-full justify-around py-10 px-16">
            {facts.map((fact) => (
                <div key={fact.label} className="text-center">
                    <CountUp
                        key={fact.id}
                        start={0}
                        end={fact.number}
                        duration={2}
                        suffix={fact.postfix}
                        enableScrollSpy={true}
                        scrollSpyOnce={true}
                        scrollSpyDelay={100}
                        className="text-4xl md:text-5xl font-bold text-primary"
                    />
                    <p className="text-lg font-semibold">{fact.label}</p>
                </div>
            ))}
        </div>
    );
};
export default QuickFacts;
