import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cdn.sanity.io/images/ocl5w36p/prod3/af5246c3d13e3c1532f525b290f5c33a3dd59d9e-1281x1760.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Falaknuma Palace</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from ₹8000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://ik.imgkit.net/3vlqs5axxjf/external/https://media.iceportal.com/49807/photos/78146306_XL.jpg?tr=w-940%2Ch-529%2Cfo-auto%2Cdi-ami-fallback.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Park Hyatt Chennai</span>
        <span className="fpCity">Chennai</span>
        <span className="fpPrice">Starting from ₹6000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Oj63wigzLadWxdvnDLVAgeauMP71RanbwQ&s"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Ritz-Carlton</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from ₹7000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFhUWGBgYFhUVFRgXFhcVFRgXFxcVFhcYHSggHholHRcXIjEhJikrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEAQAAIBAgQDBAgFAgUEAgMAAAECEQADBBIhMQVBURMiYXEGMoGRobHB8CNCUnLRM2IHFBWC4ZKisvEWY1Nzwv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACoRAAICAQMEAQMEAwAAAAAAAAABAhEhAzFBBBJRcWEiMoETIzNCUtHw/9oADAMBAAIRAxEAPwAUBT1FdUV0V3HMOC1yKetKKwTqpTmSKaJqVBNAJLh1HOrDXQu1Qq3LnU4w3NjU38jr4EXnU1FiHB22rtyF03qEU0UBsQWnEU/JArgphRBaw3pfxbtH7FD3EPeI2a5/A/mtB6U8W7C3lU/iPIX+0c39nLxrOeinB+1btXH4aHY/mbp5cz7utQ1p8IpCPIa9E+E9mguuv4j+rO6qefmflA61rEv9hliDcYruJyoxAMg8z8B7K5hMttTeuCTtbX9TeP8AaNz7BzoTfvsXQkyWuLJPiZ+lcyyyzdGpxVpXU3E0gSy818R1XxrMY/C2cekAgXlEI5G4OoS4N8p5Hl7wTnale8pggfYI6UN4Xwc3bKNbhHRHYMdgqEkhuq6DTxG29DUn+mtrQkp1k88svewd/Yo6GCD+bqp6gjnz0Ir1HgvElxFsXEOmzDmrc1P3trQjiPD1xiZLi9niFUFGaRKn1ZMaodYbz8QcdwjiN7AYgq6kaxdt9RyYcpG4PP2zVISrbYOJK0ewWrUa05CieJJ0AFQYW8jotxLgZGAIPIg1YVZ2Agc6oA5jMQcsExNVMPbJ299PtBWJzEk9eXup6YpU0WW86dYVIR+WWLGDUesZ66wPKnNxFF0UT4jShdy6SSSd6ZTfp3uBz8E+JvlzJqIUgK6BVEqEEBTopRXQKJjkV2KcBXYrAGRSp8UqxjHrT1WmoatJqOVZmRxLdSXQIqOTTpka0oxXuXQoJYgDmTtrpUia0L4qM921Y5MTcf8A/WnI+ZIFai4yN/VhGGguD1T+4cvOklqJOgxi2RYdYpYi9Psp72nQweex5HyNMKddD1oLewvYrZDTiI86kMzrTAetUsQQNNv3Vto1xzCqJJ8P5qRGE1i/THihu3Bh7WoDAED81zkvkPn5Us5dqsMVbB6Lcx2JJ2nfolsbD73Jr0LhuDRVAHdtWx9+bE/OqHo3wTslFsau2txvpPQfzRHE3cxFtPUXn+o82P0/5ribs6UqIcTfLkse6oGmuiqOXz+NAbeP7TE2wPUDrA694d41bxz9swsWzCz3m3zEfQR9xQ+zhrdvFW0t3C8MuZogZsw0GvKjFXkWT4Nre9U+VWPRDGFcOLakzdCoAYKS10AypldRpMVXveqfKmej0GwgkhlJYMvrJEQx5kT01ETVVpLUtMnqJtYLvpClu7jAyhldS1tANUe2iMAF/QQFBjUGJ0O4b0h4EmLTK0LeUfh3Ov8AY/8Ab8qt4q6y37UyHlmBnf8ADc5gaM2kW/poLsHTYPHNfHwqKhLTtPybRWHfk8v9GOMvg7zYXEgqhaCG2tOfz/sOknbn1n1EWW0OYHwG0edZz0l9HlxaQ0LeQQlw7Ef/AI7n9vjy94Ir0R43dtn/ACOJlXTRM2/ghP8A4nmNOlWhLgeSNZfQA6H/AIpgFKugV0ogxRTgKQpwFExwCnRSFOArGOAU9RSAqQCsY5FKKdSisYZFdp0UqwDG2gOdTMelQAU6i0BEgJp+ao1NSX7OZGXbMpE7xIiYpWOgdwvK927fcgKW7NT/APXaJBjxZ83nArYLhkujumD+g7/7Tz+dYfiFnKtu2vqWjbnxJIVR7szHzFatT9+6uNptnTVRTHMz2QQRmUbo30PI023eS8p7LcesjaOv8jxFWbmOJRlcZtCA35h0k8xWTJ1BBII2YGCPI0YtoV0zQ27fXeob7iYFV8NxwHu3t+V1R/5r9R8KmuIRryOxGoPkavCabJTTSAvpNxb/AC9rQ/iPITw6t7PnFDfQ3hBAGIcS7/0wdwp3c+J5eHnUnEeAPexYuXWBsgCF5mIi3HQmSTWqR+yUP+c+oP0j9X8ePlUdaTbofTWLHYluzBsr650uH/8Aj+fd1qpbsm5cGGttDNrcYbhBEhf7jIHhM0y45WEXW9c2nXIvN2+9TVDGYhsBiSbWrmzlDHUh7hkuerabbajpUUnJ9qKSl25Y/wBNCli8tqywGS0qtl/ISXlfOCPHWd6E8KwhW5ac6S6wPCRrTcJhD2ydrJzAvrqW9bUzvJFXf86HxFpV2V116nMNvCuhKo0iF3K2a91kR4VnsPjHw7hLhyiSLV4erB2R52Ovka0Q+lQ4rCrcXKwBBEEHY0E2naKEN/Fh7toEQwZzAHdP4NyWB5TzGnI1ctnUR15UBwHDblq8gkvaXNlJPetyjLl19ZddOY8qNXbpRXZTBVHIMAwQpgwdPfR1Jp5+DJBu2VvAq2l38p5P4fu+fnvneP8ABRiBBhb6f07h8NQj+HQ8ql4ZxJbwiAtwCSo2YDd7f1XceI1owHF0ZWMPyb9Xg393jz894ryh/hmZ4BxRnzWLwy4i1o6ndh+sfCY6g7GjYofx3gxuFWU9nibX9K6dj/8AXc6qdR4T5gv4RxDtVIZTbuoct20d0f6qdweYrp0tS8MhONF4U4UgKcBVhBAU4CuCngVjHVFOpKKdWMcAp0UhXRWMcilTopVjGNa3pMUyKmdDFdt2utDuwaiFRU/LanZYNWcK4Ny2IGrpP/UKnqyag38DLAF47+GEsyC7Xczx1UzHkAsf7RRsN9+6s3iX7TEXbnIMyr5z3z/1af7aLterlhPvf4R1zj26cf8AvBYvXdDWXuXp2o270GuWbTkdi2RmmLT7GP0nWJ6a+VO8EbIO0q/w7iDJoNV5qdvZ0NC20YqdGG4P80kulTPwpbsZYNdhiCvbMIQHurzZjqF/noKhvYmJuv3mPqqOZA5DkoA9gFVnxgKhm7ttAMq778vFifpUWB4jbNu9evSGIa3bXpoIUe+WPh7KR2w2kCrXFGF17xEsRA6AyI9gAq16N4c4jFA3ZYkFyW/NqB7v4iqnBrK3HVG9Ud5vHUCPjV7jGPQYljYaFCC3KjylVj3aVfGyILyx3pxikOKIstIVAhK7EgtIB9sVXwnCrlp7D3BBd1hegBG/jTsHYa1iba3lCyueDuohsoPiImiXFuLC9fw6qO6jKAepkSR4Utv7VsNSvuZoP4ro5Vz+KQ5URjjV1LYaVOxVx71Ncan2QZMfpbb9poSVoK3MnjcG1lpE5QZBGjKRsZGx8aOcG4r2xyPHaflOwueAGwfw58ugfi9jmHtrHcbU2wWt+GnTXcVyxcoOmWdSR6euIFxRbuHvDRXP/i30NDsZw49qrzkup3c0aPbnW1cHMblT+U+EghPRTi1zEWSb0F0IUvzcESCw/VoZPPTnJOqwmIVx2d0xpCueXRW8PHl5bdCxlEt8MiK10CnOpU5H06H6H+aQFdUJqSshKPaxAU8CuAU4U4B1IClTgKwDoFdFdApyrWMNilUuWlWCYxG6mkTG21Mino8cq1As6pNV+LZltk2/XlYJ0g5hr7N/ZVrNPOKgxzHIRM7fOp6v2P0U0knNJ+QTZthVCjYCKIzVGrc1w9Pyd/WbROvQO/YZDDCCII8wdCKM3DofbVP/AFkFSLtsMY3Ea+YNXkcaBbXWnvBXU8mEMs7lWGvUwZ9lOJUzlllG4YQQfA9KnuW7ZAKNqSRlOmo5a86qvaOoBjqJ+tRx6HLmDxqhsz6pbAyiIMsDr4tynxNCu0UAEneYWeZ1Ps2qzgOHPeuhWkDQaiJgU9+IKqvaVQZc6sAYXu+rPPTeqxVPG5OT8lbDu6zlkFhl8YMbUc9HcCtvEjtoXInaEmBl1GuvhNDuGYjvydIE/wDcB8ial4reOIv6CO6o9g5n20ZbirCLHpFxVcRijctqcoARNIZgJg5eUyfZTrfDntvYe5uzrAGwEjTx86rWLSI5DCMuhJ05TPxqynEe2vWwM2RHthczFjObU66jymtW1bB97mv/AI+/v/1XByrv8VwcqYJxqv8AAjF+2fE+P5TVBqtcOtlrgUbnMBPXKedAxpuOeja3JuWIDE+oNFbuzKnkfh5V5P6XYHIjGCCCoKkRBzDlyr1HDcYuWWyXJ31nfaJPXzHxrC/4qYgPclT3Wt2vIkGkl8mjaBnoH/Tu/uX5GtPWZ9BP6d39y/Jq01FDMt28RmUW32Hqt+nwP9vyqQUPoim1W0uScztOFcFPAqoghT1FcAqZBWMdRKlUU0U6sE7FKlNKsYwarUvZU+zZJNTXrJA1A86LlkVRwVitQY31D7PnVlE61HxK2Ah9nzqeq/ofopoL9yPtAc1aJqqas1xdPyd/Wf1/ImNDsRgRBKMDr6sz478qvXNj7az7ptuCNRyIPUGqzRxxFiLAPdYe/r4HrTGuMqwBm1GhMabRPP21JdvnTugwIOsE679Jp/aJsD/tPPyB191I75GxwMt40gErMmBB9YETt466Vd4PhrQtXL1w8riiR+bKAI8SW+FQcNZLd03CB3YgHXcHah1x9gT3ZJj+5twB1gCmSvGyEbrJYwrALpvBJ8FHM0R4Bi7KXi94ZkyGQQGLGRAA2n5VQwGLyMWjlAHkVP0qbB4d8TeiQCdSYgACBsPOq1jO1CeK3G8VxK3brMlsWkJlUDEhQBGrN4Dy6V3gtwdsgGvfST173IdPOr/GeGrh8StsagWwSepOaTUOFA7e0QoEuswInvDeKyaawamnk3H8ff38qaOVO/imjlWHEau8IuhbqsdhJ/7TVI1e4PbzXkUiQZEf7TSvYKNfeSziBrB19vq8uc15V/iHh1tZrWaWARhIg5WP061vcfgLlo5rRJE6jnt05/OvP/T66bo7VtwqIdejUrdoCjTK/oJ/Tu/uX5NWmrM+gv8ATu/uX5NWmooZnKJJtQ2iabCq6ZOY4U4CuCniqiDlFSCmCnihYR4p1CMf6QWLNwW3Y5uYAmPOr9vG2zHfALAkBiASBoTBpe5GLNKonxKAwWAPSaVG0Yx1q5Gv1qW7fLeFBOF49QFsuMrj+2AT7NAaKkgbmKZU8iW9js9aix8dmd50+dPtXVYAqQQdiDUWPHcPs+dLq/xv0U0P5I+0CjVk1VNWK4en5PQ6zg450PtoRcxKnN3YBE/qJYcgIou9BbmHYbiqzrk442IW1YShkabgzmOsEHUGoruGGoOkddRPnypuJw3Jh0In4EEVCDcXZpHR9fcw1980lPhhvyT8M4eXu9mXyrpLEzAIJAB8Y3pyXrQtm21sM5Y5WOmQEgZpGp2Om1R4e+wZsmhYKNN9AZj31xbcAMRJiPARz8T4/YrHP3E38FrCYMNc73qgDQbnUCPDeiWNx6YfFZ7aCBaCquwBMHWKD4LF5dNtDJ9oOlF+C8IN3EhbqsBAbKdGOxG+0gzrSyXPAV4W4NxWOu3rpu3WlmEyRAA6BRyHSu8Jvhr6QNnTU7nvdNgPD40Z9NcMlrFBbawi21EREElt550I4ap7e0YiXXz9YVWLThYlNSN+Pp9/fuFNjanDl5ff3vXByoFDlW+HEhwV3GaNJ1CnlVar/BXC3kJ2BO+n5TQlsFBZOKA6P3TO/wCXb4e331if8R1GVvK2fPvDWvQOKYOzc19Vp3Xy5jY15r6c4c27bKdfUII2gsPcakxkVfQb+nd/cvyatLWa9Bv6d39y/I1pKeOwrFRRBoPKhdFrew8hVICSHAU8U0CnqKoKRYvErbQu50HvPgPGsx/8mvXLot21VRm11zMV1I8Na0HG7M2T38sEGcwWeUS3nWBw9rD4O6YvC5dkNOuVTMjz3HMfOpTbsKRduqwvu11E7ZQHIGxLMoAMiABufEUF4liMIblw9rca7uWjug81HX5ae2lxDjIupdF66EGbMqqslyWP5huNfmRVHCdmjC6beeVPcGuaIO/IED4VJ5Cdt45yJVrhGsE25kT1nWlRT/5FiW7wtqAdgLawB0E66UqGAkmLvBkV7akkOCwLAAEmDmGm5j31Hcx73FZL1ooQywwOmvUnzHvrP4TG3cMyvcR4MEHVQ6xoD161oOI8XKguio9s5cytowleXUaH3VfusnQO4XfWzdDnNHeECDC6ax5/KtZjHDWsw2MEe+sdxbF2ruXse66xC8iANQT19msVoeHl/wDKxcWGB10AE5pMRSuX0yXwU0l+5H2iE1YqsxqxUOn5O3rOPyJ9j7aF9ldRs8FjEakkEHkRNErmx9tFMDjMNeBBcWyJAW4QJHIg7a9Jmqaja4OWFGRuYxyxLBSOQEgjYRqYIimtibc6HLrorCJ6DXQ1rrvCrV2ShVgDllSGhhuCRsfCg2N4DEwfqPcf+aipR9D0wK/rNGk5dvENOnTam4ezcuyEUkIpZo2VV1LMeW1EOE8Fz3ijvlQZQxQEmDMBQYjY68qIcL4pasYbEWDOa4b1tQNxmCqGY9Br7qspf45ZGUfOAfwK9lfMFBKgEHu6HOgzS3gSPbVviPHbgvteQw5AGbQxCqJHL8tDrWGba2QZ01IHmST40d4Pwq2l78Yi5CZtR3c0jkdwNd/dWl2p/gytqkDOH2bl64O0Zu/LF3kltPW1328qO8W4Yli5hgusuCWO51X4UvSLiKC92tuGCjLodJltJ9oodb4pdxF221wjS5bChRAGvvpoqTXcC1F9prh9Pv70FLp9/fyro+n39muff3P1phhff3/NWuHJmuBRzkf9pqqfv7+tWuHXMtxW6SfgfuaV7BRexJu2tx3QfNduRG1Y/wBOcTntlojRB7Qwr0AY0NpOs7HQ7fGsN/iBYUW2IEaJoNBOYcqm35GQL9Bv6d39y/Jq0lZv0I/p3f3L8mrR08dhWdova2HkKD0ZtbDyFUgKx4FPWmCnCnFMx6ZXkYZXum32feyiPxDAgb8przEYQveZiCRMs8jafyjaOnsref4g2bLPbzEknQqg725PrTEHXSsPxnBXLcdqMkQAixpqYzx8K557jFr/AEprrCQqKTCLr3wJktBJEc/bSxaGxdCKUuZFJlCGgCSQTroNfYabbx7OFS8WVAsKY5MZAAnqPnTcJhgcwtAPcAzQWysRBDKCNJIOxnYedLuYcuBuMA1vDuVIEENIMaE6eM1yttwfjeHNi2VxSWhlH4bBiy9ZKmNTrHKYpU/ajEGM7N0XMBlAB1GkHQRPkfdWExt3vsBcDico0y90Cdto8P8A1TrN83TFy44QzsJIiI9nXyojwnhFolu0OYAgywKnLuT0Ox0npRk3IVKgVcsvbbNEbbDQE66H72qxhuIXlJKsWDnVTqJ6yafxTFG1cdE7yAwCYmI5c5g7+FUBejvp3dQY326/fOkl4GjhpmksXn2eNdVI5jp50SoHheIKyZiNtCd4O3so0jSARzFLo8nT1DTUaY4iob/AmExy66fzUhPTeqH+o4pM34j65tHAdQWM5hm6HYTGu1PqXwQjXJG2Eu2zIzKYOqmIBEHvLtpRBPSK6EyvbR4AAcgg9NSDBMV3DekHeti5bWIi46kg5uTKnTaRNIcawzM2YMka53WA3kyGR7YqTb/sh1XDBl/ibZ2NmRngQB3hlB2I8zRD0f8AR0XkuXrjmEViEXdiBMlumvKq2L7AtcFw91gkFNz6xERAPLffSocLxG8o7G2SAwhgo7zDnJ3jTlTu3HCom6vORXGFtyY0gAAdZU/SliMVcubA6iMqzJHQxqamvYH8MO0xrou5jzq7gXUILmUKpXKQpOuoME6k0+GrW4mfwPwXBzCWLwKF+9pBIWDAPQnL7JorxHhduwuHFtY/GWWOrHUbn6bVVx+OCIMRaB0jKHJaJBHnHtqlgOK3L+U3XzEXrUDQAAnkBRalS8BTjdcmuHLy+4/4rnT7+/nXR9Pvx98UhsPv/j3URzh+/v6mrnCVBuoDEEnfbY/c1VI+/v60v8z2QNySMoJldToDt1PhSvYKNLj+Eo3qkqZ8xt0rB+nWFuJZYMZHc1mRGYRvqKPcO9MLd0d11fUz+R9NNjpQn074gj4VgCZ7mhEH1xUrkNQF9CP6d39y/Jq0dZv0IP4d396/I1pKqhWKjVrYeQoIaOoNB5U8RWdFNvXQqlm0ABJ8gKi4hjFs22uPsonx8hQBPSIXLNx3shgFBVCJzEkgTuI03pnJIUF4PiBi5dt2HZFYnPdOdzlgxtAHy6mg3FvSXD3nZ2wLm4YyqzAAsBBYlRJ/L7DVsX7xtdpcuMM7EFQCFA1MbCVGmg2BM1Ww/ozdZExBuZ85CqNYDMwVRmMSm4POPhK2FAYFjdD4rfKAoPRAqjYQSBuPHXejQFtReuplV0Uhcsl8xHrkMesdN/EUQ4zwNEVbbOz9mIWSLeRnJZjJlSdJ01k84oQuOZ8mH7JS8lg4b2kplMIcvSNuhNK8BM9ibT2zkS6MoVTomneUMY06k0qZiLeViGaCDGpUGPykgnmIPtpUDFzCYkixluMoMwAAJCnpHjzqG1xC4gPZ3Gyk7EzyKxr4Eiq1/fUTtBjbrrTQABruPykH3ffWiAs4vBsAG0JOwEyRGp6biK0GC4CnYC4+rjQrOgJOkgeB+NB+HY1AnZvaEHMC49aTEezTatitkphiv5Rlytprr4UaXa38Daf3r2Zx7CpoAADMgk7+HhRDBHLbUeHzqljbQOh186s2j3V32HypNHk6OpVUWrl0QfI0XwV/B3BkFxQUTM5YFBC+sQxAB/igFxtG15H601uFXOny/wCKbVSe5CF8GmucAsXAGR1YMAQwIMhtREEGhV30aIOuYD+2G9sNHzoHe4YymTbjUGYI1XYz1HnU+Hx+JSMt67lH5S2dCOhDTU1FrZj35RabgqdoQbkqoU+rkJmQVMkxt40Ww5S0OyGQNcCgD85LkbaGR5kUJ4ziX9dTkzmGjpEgA+2rv+kXblwYtIFmwLJcsdS3cJULv+YTMCqVa+pkm6eEL0qJs2ktiJDMCfjAqpisYf8AT7Kgam48nmYqv6TcR7YwSCRdvd0cu8APH/1XWt3HtWrQWAgJljGrAaRvpB99PFc/FibhvheH7XhyWmY9+/MjcAKTl1/bPtrvEMDbw92zZtrE3LTydSTsZPu8Ko4G01sIBcbu7AaCTILQecGJq7Zl7qFpY51MsSTMjmZNHN7jKjQLy8vZ/HzrvT7+P8Uk3HX4/wA04D7+9aA5w/f/AK/mm4i2WRwBJKtt5H7ipCPv/gfWrGBt5nAmJnUaxofZSt4CjyrEcMuo5zoVOZyJkHVyRr5EUziV+6uW2bjFWBJDawVYRqda9gx3C3bSFcdCMvLoZHxFYL0y4SttMxtlH0C9IJ1AIJHLbwpIuL2Gdi9Bv6d396/Jq0hrOegw/Du/uX5NWkimTFoaa0CbDyoARWjFqFB8BTxYGivisOtxCjDQ+E/A0xeH2+zFrIMg0y8qsTXRTC0CuK4AdnbQIGtIZZJ3VR3R3jBEgTNed8Ux+Na4BbBSWYraWGjuldTrLQxHX2AAetEUPxGGIUrKQx1lSusyO+CYM7GJHLalaMePq4RVZmzXGk5TJI1MluU+G9SvdDoc7gPH4YHd5b+fICrfpJgjYxDIsFbneIWHidCytEmdztqefOv/AKOBbW4t23cYyQoIkDQqYOm86aRHunRhtvhdu8Bdu3hnb1pKyCNIPlEeylUv+nWbs3L8i6xJcBwuskeqF0NKsYCpaJJO/IDUyxHIe3405rgyNnCsxy6yJGkcj8PKmWcRlJ1iRvGsHkDTltArmJkAkLtJ3OvwHvpjF70WdO1KMmcNosgwG16Dajow72mupkZbbQY1KhpkQZ00+lB+ErfAD2VBgwAYykHfQazv41qsdiptBTClo7p0Oh1otfQxtP717AOIq0LWgg7VWvCr4FS0OTp6rgguIYbbUGrCelN2Ia1ZbyDLpH7j8qa+x8jQOqySZyptGms+k1ooRcsspP6CGG4/VlPKpF4rg2jNIIX89s8uUgHX21kyaaWpHpoZTYTv3hehF1VXLhuWsCNf20ZwXErq4e5hiVKXSM5ynNChQqgzp6g1isueMgCFUmNJJge4VXu8Vut+bKP7dPjvTJJKhWaW1aS3sFXx5n2nepWuHLmClhEjKJmsbaukNJJOvMzV1eKOFyrppG52otvgySNUmHvESbRXUCCygiSBz/imYxMjWywZO8B3zoR1GsVmr/GcQ/rXWjoDHy1qtZJLgkkmRqdTSruu2F1VI9es4UG2jWwxlQZVgVmNef0qo14pbzOwEKGhu6TpJ2gVgLdwqZUkHqDB+FWhxO9lKG65UjKQTIg8taRxndpjJqjYcM4ul6QoMrlkbjvTETE7UUs3CIdZHQx7PKsBwjiDWC2UBs2XcsIyzEFSOtaPA+mAVQrW3Ec1Iaf+qD8aNuzLY1FvjDka5XHWNfesCgfpZhDi7QVWyMCD3tVMTzGvPpVK7xuw1sKWYMEgQgBnKI18wedRcV4wAM1m5zEA5TpHnprSYT2G4OejXDLlhbi3MurKQVMggAjz+FGQKzmG9InPrIrdSsjmRpuOVWbXpXh9AwZZ8JG/hr8KbuQEGWFGDxK3AGYchQOxjLT6o4PPpA9tZ7F3bCMXtm62pzBtFG85SOh8OdHuFlg9AtXFbUGakuXEUSzBQNyTA+NYEcXCDOxK2wCQolSx2ERB9uvlUD8RfGhLZui2moOYagE92GO7e2ip2KmaS56Y4ftMiK7DbOBodY0G5q7xbjmGsLN5oMA5AMzwdPVHtFYriIGFKG3dUuZ72UFg+kQBpqI9tQ8C4W2IuPcutdRk7654OYkk8+RPnsaNsxs7NnB4theAJcAesWDAQYGVtI1PKKCek3o32S9thlkD17Ow1/NaA2fqNFPgdaJYDj9prrW7Nh2KSpukKJyj9W2seArIek3GsfiC9pAUtgkgLAZlBjU84kbVrGwV7OE7QB+3w3e1/FdVuTzDhnBB86VA1wKkAsxJIBJBWNRNdoClPBYdblzK75QV0O4zSN9RpGY+yOdFrHCLtstBDINGO0Aa6DU65R8aEYfEBCGKhhlKw3UmQRHMVZXHO6tluMoYANtvIMyNQNPhWcqYCzhMW6XALV2NdV0IkaHzNW/SHtXIuGO7G0jLOxFZ/sMsHNIPMrGx1EE0aw/FVa2EIJMgTyA02AjoffW7sBjuX1MgTqY1jaaIAVQt2sozMwj3Ae+r1q+hEhhA31iPfU9F5Z2dSsRO3BofI0BNQcR47cJi33QCRp3p5a6a+ymYfG5mg6dD9Kt3HHgnNMau4i6F393lQ/8AzpLaEAcl50HJGGnc+Zp6io7TzrUrAbTB+dZyox1RT4qthonUmfKPjRC4oOoM6/SlU80BMhAqbDjvDzFRgVYww7w8xT2NRdIptTlaYyULDR22Zp4qDDH8VFPM6+UGtJZwqfpHt1+dagpgNqcLROwJ8ga01u0BsoHkBUkVu01matYW7MqrD2R86tLhLzNbZgJtsGScuhkNrG+oFGWYDcgedRPjLQ3uIPN1H1rUAurj77o6FLUspAYMwjQjoetZ7E8JxHZsCZjMQM0gzygjT30Ts8Yw4bW/bH+9f5qw/ELTDuXbbftdT8jWeQdqM/w+0+Yr2Illg8pnkM2k7bdK0XA+G3lGZ9GUQFyqNDyzRrQ+7rVY4l19V2HkxFKoGWCG9/l1cs474zaKAYJjUlmjflGhmouGWcXiAF7Ts7YBCB0OXLMGCv6TG+3KoMThVY5iNTqTPM1Bj2YW8mdsqSwWdJHPSKDUkV/bbSWDS4fiuHsrlvWirr3We0RctltsylSIBIIIIB6zzpcX9IrWUlGQHlkIaAdxHKY21+tYbEYkmD9knemXnkiRI+9zWjMGpFJYYTbD2WOYM8HX1l5+ZpUKzAaa+/8A5pUbIkLj8NvDarKeofZ9KVKlkKW+CKGDBhO++vJjzp1vS9A0GYe7SlSocFo/19/6LHpKx7n7W+a0NwOtxAdRD70qVCGw3Ufysqrua5Y9cedcpU5Eu8WP4nsHzqhh9XE9R9K7SrMz3LFod81Lf/j50qVDg3A/CgZvdV+6BE85Gv8AtFKlU19yCVzVnCDX3fMUqVWYwRpUqVYYjtj8RT4/Q1ZxeIcDR2Hkx60qVFGZl8ZxO/nI7a5H728PGqrYu4SJuOdBuxNcpVhSVakpUqxhjVGRXaVEAQ9HjF+2B1P/AIPTr2Kuf5i4M7QHaBmMDU8qVKgHg0IOi+Qofxb+ld/YaVKn4F5M2BVkeoPbXaVcxRbMnwvqj2/M0qVKqET/2Q=="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Debali</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from ₹10000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;