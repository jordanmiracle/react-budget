import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Court',
      amount: 100.00,
      date: new Date(2022, 1, 18)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 101.01,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Game Pass Bill',
      amount: 16.59,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Budget Calculator</h2>
      <Expenses items={expenses} />
    </div>
  )

}

export default App;
