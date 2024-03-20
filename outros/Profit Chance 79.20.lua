--Profit Fast https://www.youtube.com/watch?v=VJkio2mP1ig

chance1 = 79.2
chance2 = 84.5
bethigh = true
basebet = 0.001 --balance/10.000
nextbet = basebet

function dobet()
    --Strategy
    if (win) then
        nextbet = basebet
        chance = chance1
    else
        nextbet = previousbet + (previousbet * 6.70)
    end

    if currentstreak = -5 then
        chance = chance2
    end
  
    --Switch OverUnder
    if currentstreak = -4 then
        bethigh = !bethigh
    end

    --Stop Profit
    if profit >= 1 then
        stop()
    end
end