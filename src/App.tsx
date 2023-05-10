import Repositories from './components/Repositories/Repositories';

export default function App() {
  return (
    <>
      <div className='min-h-full'>
        <div className='bg-gray-800 pb-32'>
          <header className='py-6'>
            <div className='mx-auto max-w-7xl'>
              <h1 className='text-3xl font-bold tracking-tight text-white text-center'>
                Top 10 GitHub Repositories
              </h1>
            </div>
          </header>
        </div>

        <main className='-mt-32'>
          <Repositories />
        </main>
      </div>
    </>
  );
}
