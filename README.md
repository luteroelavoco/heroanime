# Hero Anime
>A simple anime catalogs 

Hero anime is a responsive website created to show anime information, such as name, number of episodes and trailler if available.

![](public/home_page.png)	


## Instalation 	

Go to cmd and run the code below 	

```sh	
yarn install	
```	

After all dependecies installed	

**To run**	

```sh	
yarn dev 	
```	
## Project features

* Trending animes

A list of 10 animes to be released soon
 
```sh	
https://kitsu.io/api/edge//trending/anime
```	

![](public/trending.png)	

* This year

List of 10 animes to be released this year
 
```sh	
https://kitsu.io/api/edge/anime?filter[seasonYear]=2021
```	
![](public/this_year.png)	

* Midle school

List of 10 high school anime
 
```sh	
https://kitsu.io/api/edge/anime?filter[categories]=midle-school
```	
![](public/midle_school.png)	

* Samurai

List of 10 samurai anime
 
```sh	
https://kitsu.io/api/edge/anime?filter[categories]=samurai
```	
![](public/samurai.png)	

* Select anime

show selected anime information
 
```sh	
https://kitsu.io/api/edge/anime/11
```	
![](public/seleted_anime.png)	

* Search anime

Search for an interesting anime
 
```sh	
https://kitsu.io/api/edge/anime?filter[text]=naruto
```	
![](public/search.png)	

* Pagination on searching

Pagination for search results
 
```sh	
https://kitsu.io/api/edge/anime?filter[text]=naruto&page[limit]=20&page[offset]=0
```	
![](public/pagination.png)	

## Meta	

Author - Lutero Elavoco

programmer -  [Lutero Elavoco](https://www.linkedin.com/in/l%C3%BAtero-elavoco-5951b619b/) - luteroelavoco90@gmail.com	

https://heroanime.vercel.app/

## Contributing 	

1. Fork it (https://github.com/cientista1/heroanime)	
2. Create your feature branch (`git checkout -b feature/fooBar`)	
3. Commit your changes (`git commit -am 'Add some fooBar'`)	
4. Push to the branch (`git push origin feature/fooBar`)	
5. Create a new Pull Request
