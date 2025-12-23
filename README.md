💻 Machine Coding Problem (Round-1 Simulation)
📌 Build a “User Directory Dashboard” with Search, Filters & Pagination
📝 Requirements
You need to build a User Directory Dashboard using React + TypeScript (preferably with Vite or Next.js).
The API is a mock API (provided below).
⭐ Core Features
1️⃣ Fetch and display the list of users
Each user card should show:
Name
Email
Role
Status (Active/Inactive)
Avatar (use dummy image)
Show the users in a responsive grid (3 columns → desktop, 2 → tablet, 1 → mobile).
2️⃣ Search (with 300ms debounce)
Search must filter based on:
name
email
role
If no users match → show an empty state component.
3️⃣ Filters
At minimum, implement:
Role filter → Admin | User | Manager
Status filter → Active | Inactive
Multiple filters should work together with search.
4️⃣ Pagination
Page size = 8 users
At the bottom add:
Previous Button
Next Button
Disabled state when no more pages
Pagination should respect filters and search.
5️⃣ Loading & Error States
You MUST show:
Skeleton loader (at least 4 skeleton cards) while fetching
Error component (with retry button)
6️⃣ Component Architecture Requirements
Your solution MUST have reusable components:
<SearchBar />
<FilterGroup />
<UserCard />
<SkeletonCard />
<Pagination />
Keep logic inside custom hooks preferably:
useUsers()
useDebounce()
usePaginatedData()

7️⃣ Bonus (OPTIONAL but recommended)
These help you stand out:
Sort by name (A–Z / Z–A)
Toggle layout (Grid / List)
Persist filters & search in URL (useSearchParams)