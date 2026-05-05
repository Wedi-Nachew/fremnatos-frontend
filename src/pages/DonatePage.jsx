import { useState } from "react";
import {
    ArrowRight,
    Building2,
    Check,
    CircleDollarSign,
    Copy,
    CreditCard,
    Globe,
    Landmark,
    MessageSquareHeart,
    Shield,
} from "lucide-react";
import PageHero from "../components/PageHero";
import MottoCta from "../components/MottoCta";
import cbeLogo from "../assets/banks/cbe.svg";
import awashLogo from "../assets/banks/awash_bank.svg";
import dashenLogo from "../assets/banks/dashen_bank.svg";
import abyssiniaLogo from "../assets/banks/boa.svg";
import wegagenLogo from "../assets/banks/wegagen_bank.svg";
import berhanLogo from "../assets/banks/berhan_bank.svg";

const bankAccounts = [
    {
        bank: "Commercial Bank of Ethiopia (CBE)",
        accountName: "Fremnatos Social Development Organization",
        accounts: ["1000241223195", "1000564271498", "1000622132404"],
        icon: cbeLogo,
    },
    {
        bank: "Awash Bank",
        accountName: "Fremnatos Social Development Organization",
        accounts: ["013251148569500"],
        icon: awashLogo,
    },
    {
        bank: "Dashen Bank",
        accountName: "Fremnatos Social Development Organization",
        accounts: ["5013032975011"],
        icon: dashenLogo,
    },
    {
        bank: "Bank of Abyssinia",
        accountName: "Fremnatos Social Development Organization",
        accounts: ["146309151"],
        icon: abyssiniaLogo,
    },
    {
        bank: "Wegagen Bank",
        accountName: "Fremnatos Social Development Organization",
        accounts: ["0827742010102"],
        icon: wegagenLogo,
    },
    {
        bank: "Berhan Bank",
        accountName: "Fremnatos Social Development Organization",
        accounts: ["1500700167456"],
        icon: berhanLogo,
    },
];

const donationFrequencies = ["One-time", "Monthly", "Quarterly", "Yearly"];
const donationAmounts = [15, 25, 50, 100];

const DonatePage = () => {
    const [copiedAccount, setCopiedAccount] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState("Monthly");
    const [selectedMethod, setSelectedMethod] = useState("Stripe");
    const [selectedAmount, setSelectedAmount] = useState(25);

    const initialForm = {
        fullName: "",
        email: "",
        country: "",
        amount: "25",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    };

    const [formData, setFormData] = useState(initialForm);

    const handleCopy = async (accountNumber) => {
        try {
            await navigator.clipboard.writeText(accountNumber);
            setCopiedAccount(accountNumber);
            window.setTimeout(() => setCopiedAccount(""), 1800);
        } catch {
            setCopiedAccount("");
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setFormData((previous) => ({
            ...previous,
            amount: String(amount),
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setFormData(initialForm);
        setSelectedAmount(25);
    };

    return (
        <>
            <main className="bg-gray-50 text-gray-900">
                <PageHero
                    label="Donate"
                    title="Give Today, Sustain Care Every Day"
                    description="Support children, elders, and people rebuilding their lives through immediate and recurring giving options in Ethiopia and worldwide."
                    backgroundImage="/hero-bg-1.jpg"
                    contentPaddingTop="md:pt-8"
                />

                <section className="px-6 py-14 md:px-10 md:py-16">
                    <div className="mx-auto overflow-hidden bg-primary text-white">
                        <div className="grid gap-6 p-6 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:p-9">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                                    Ethiopia Mobile Giving
                                </p>
                                <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                                    Text to 900 via Ethio telecom
                                </h2>
                                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                                    Donate 1 birr each day by texting to 900.
                                    This is a simple recurring donation option
                                    for local supporters across Ethiopia.
                                </p>
                            </div>
                            <div className="grid place-items-center border border-white/25 bg-white/10 p-4">
                                <div className="text-center">
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/85">
                                        Donation Number
                                    </p>
                                    <p className="mt-2 text-5xl font-black leading-none text-white md:text-6xl">
                                        900
                                    </p>
                                    <p className="mt-2 text-sm text-white/90">
                                        1 birr daily via Ethio telecom
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-2 border-t border-white/20 bg-primary/95 p-6 text-sm text-white md:grid-cols-3 md:p-7 md:text-base">
                            <p className="flex items-start gap-2">
                                <MessageSquareHeart
                                    size={18}
                                    className="mt-0.5 shrink-0 text-white/90"
                                />
                                Open your SMS app and start a new message.
                            </p>
                            <p className="flex items-start gap-2">
                                <MessageSquareHeart
                                    size={18}
                                    className="mt-0.5 shrink-0 text-white/90"
                                />
                                Send your donation text to
                                <span className="ml-1 rounded bg-secondary px-2 py-0.5 font-semibold text-white">
                                    900
                                </span>
                                .
                            </p>
                            <p className="flex items-start gap-2">
                                <MessageSquareHeart
                                    size={18}
                                    className="mt-0.5 shrink-0 text-white/90"
                                />
                                Your line contributes 1 birr per day
                            </p>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-12 md:px-10 md:py-14">
                    <div className="mx-auto max-w-7xl">
                        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                            <Landmark size={15} />
                            Bank Transfer In Ethiopia
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                            Official Organization Accounts
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                            Choose any bank below and copy the account number
                            directly.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {bankAccounts.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.bank}
                                        className="border border-gray-200 bg-white px-4 py-4 md:px-5"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <img
                                                    src={item.icon}
                                                    className="h-10 w-10"
                                                    alt=""
                                                />
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-gray-900">
                                                    {item.bank}
                                                </p>
                                                <p className="mt-1 text-xs text-gray-500">
                                                    {item.accountName}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-3 space-y-3 pl-12">
                                            {item.accounts.map(
                                                (accountNumber) => {
                                                    const isCopied =
                                                        copiedAccount ===
                                                        accountNumber;

                                                    return (
                                                        <div
                                                            key={accountNumber}
                                                            className="flex items-center justify-between gap-3"
                                                        >
                                                            <p className="text-base font-bold tracking-wide text-primary">
                                                                {accountNumber}
                                                            </p>
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleCopy(
                                                                        accountNumber,
                                                                    )
                                                                }
                                                                className="inline-flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
                                                            >
                                                                {isCopied ? (
                                                                    <>
                                                                        <Check
                                                                            size={
                                                                                14
                                                                            }
                                                                        />
                                                                        Copied
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Copy
                                                                            size={
                                                                                14
                                                                            }
                                                                        />
                                                                        Copy
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="px-6 pb-16 md:px-10 md:pb-20">
                    <div className="mx-auto max-w-7xl bg-white px-0 py-2 md:py-4">
                        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                            <Globe size={15} />
                            International Donors
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Donate Securely via Stripe or PayPal
                        </h2>
                        <p className="mt-3 max-w-3xl text-gray-600 md:text-lg">
                            Choose frequency and payment method, then proceed
                            through a secure checkout flow.
                        </p>

                        <div className="mt-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                                Donation Frequency
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {donationFrequencies.map((frequency) => (
                                    <button
                                        key={frequency}
                                        type="button"
                                        onClick={() =>
                                            setSelectedFrequency(frequency)
                                        }
                                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                                            selectedFrequency === frequency
                                                ? "border-primary bg-primary text-white"
                                                : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                                        }`}
                                    >
                                        {frequency}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-7 grid gap-3 md:grid-cols-2">
                            <button
                                type="button"
                                onClick={() => setSelectedMethod("Stripe")}
                                className={`border p-4 text-left transition ${
                                    selectedMethod === "Stripe"
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 bg-white hover:border-primary"
                                }`}
                            >
                                <p className="inline-flex items-center gap-2 text-base font-semibold text-gray-900">
                                    <CreditCard
                                        size={18}
                                        className="text-primary"
                                    />
                                    Stripe
                                </p>
                                <p className="mt-1 text-sm text-gray-600">
                                    Card payments and international wallets.
                                </p>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedMethod("PayPal")}
                                className={`border p-4 text-left transition ${
                                    selectedMethod === "PayPal"
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 bg-white hover:border-primary"
                                }`}
                            >
                                <p className="inline-flex items-center gap-2 text-base font-semibold text-gray-900">
                                    <Shield
                                        size={18}
                                        className="text-primary"
                                    />
                                    PayPal
                                </p>
                                <p className="mt-1 text-sm text-gray-600">
                                    Donate from your PayPal balance or linked
                                    card.
                                </p>
                            </button>
                        </div>

                        <form className="mt-8" onSubmit={handleSubmit}>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                                    Select Amount (USD)
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {donationAmounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            onClick={() =>
                                                handleAmountSelect(amount)
                                            }
                                            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                                                selectedAmount === amount
                                                    ? "border-primary bg-primary text-white"
                                                    : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                                            }`}
                                        >
                                            ${amount}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 grid gap-3 md:grid-cols-2">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full name"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email address"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    placeholder="Country"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="number"
                                    min="1"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={(event) => {
                                        setSelectedAmount(null);
                                        handleInputChange(event);
                                    }}
                                    placeholder="Custom amount (USD)"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="text"
                                    name="cardName"
                                    value={formData.cardName}
                                    onChange={handleInputChange}
                                    placeholder="Name on card"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    placeholder="Card number"
                                    inputMode="numeric"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="text"
                                    name="expiry"
                                    value={formData.expiry}
                                    onChange={handleInputChange}
                                    placeholder="Expiry (MM/YY)"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="text"
                                    name="cvc"
                                    value={formData.cvc}
                                    onChange={handleInputChange}
                                    placeholder="CVC"
                                    inputMode="numeric"
                                    required
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none transition focus:border-primary"
                                />
                                <input
                                    type="text"
                                    value={`Method: ${selectedMethod}`}
                                    disabled
                                    className="h-11 border border-gray-200 bg-gray-100 px-3 text-sm text-gray-600"
                                />
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                                >
                                    Continue to {selectedMethod} Checkout
                                    <ArrowRight size={16} />
                                </button>

                                {submitted && (
                                    <p className="text-sm font-medium text-primary">
                                        Thank you. {selectedFrequency} donation
                                        profile saved for {selectedMethod}
                                        checkout.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <MottoCta showButtons={false} />
        </>
    );
};

export default DonatePage;
