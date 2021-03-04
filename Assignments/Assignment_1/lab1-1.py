################################################
# https://github.com/papajohn-uop/IntroWebTech #
################################################

import requests 

def getURL():
    URL = input("Enter a URL: ") 
    #URL ="http://www.google.gr" 
    #URL ="http://www.upatras.gr" 
    #Add http:// if user has not entered.
    #TODO: In production  https:// should also be checked for
    # For now lets assume everythong is plain http 
    if not URL.startswith("http"):
        URL = "http://"+URL
    print(URL) 
    #At this point we should do a validation that the value entered is an actual string
    #We will assume sunny day scenario where the user enters a correct formed URL
    try:
        page=requests.get(URL)
        #Headers
        print("**************HEADERS*********************")
        print(page.headers)
        print("******************************************")
        print("**************SERVER SOFTWARE*************")
        print(page.headers["SERVER"])
        print("*****************COOKIES*************************")
        #Now lets do it the easy way, check the headers
        if "Set-Cookie" in page.headers:
            print("Cookie exists")
            #QnD way to get expiration
            cookie_as_str=str((page.headers["Set-Cookie"]))
            #slpit the cookie entry
            cookie_list=cookie_as_str.split(";")
            #Lists are 0 indexed, so expiration is second element therefor list[1]
            print(cookie_list[1])
        else:
            print("No Cookie")

        print("*****************COOKIES*************************")

    except Exception as ex:
        print("Oooops. Something went wrong")
        print(ex)
    
def main():
    print("Introduction to WEB technologies Course")
    print("Assignment 1-1")
    #get the URL 
    getURL()

if __name__ == "__main__":
    main()
